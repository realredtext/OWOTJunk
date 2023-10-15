const logs = {
    "page": [],
    "global": []
};

w.on("chatmod", (e) => {
    if(!e.hide) {
        let msgData = {
            color: e.color,
            date: e.date, //important one
            id: e.id,
            message: e.message,
            nickname: e.nickname,
            realUsername: e.realUsername,
            registered: !!e.realUsername //anon username "e" does not exist
        }
        logs[e.location].push(msgData);
    };
});

function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  function onDownload(fileName, jsonData) {
      download(JSON.stringify(jsonData), `${fileName}.json`, "text/plain");
  }

const exportLogs = {
    page: () => {
        let pageLog = {};
        logs.page.forEach((msg) => {
            pageLog[msg.date] = msg;
        });
        
        onDownload(`PageLog_${Date.now()}`, pageLog);
    },
    global: () => {
        let globalLog = "";
        logs.global.forEach((msg) => {
            globalLog[msg.date] = msg;
        });

        onDownload(`GlobalLog_${Date.now()}`, globalLog);
    }
};

client_commands.export = ([type]) => {
    if(type in {"page":0,"global":1}) {
        exportLogs[type]();
    } else {
        clientChatResponse("Invalid type")
    }
}