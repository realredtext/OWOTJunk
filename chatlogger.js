const logs = {
    "page": [],
    "global": []
};

w.on("chatmod", (e) => {
    if(!e.hide) {
        let formattedMsg = `(${e.id}) ${e.realUsername!==e.nickname?e.nickname:e.realUsername}: ${e.message}`;
        logs[e.location].push(formattedMsg);
    };
});

const exportLogs = {
    page: () => {
        let pageLog = "";
        logs.page.forEach((msg) => {
            pageLog += `${msg}\n`;
        });
        return pageLog;
    },

    global: () => {
        let globalLog = "";
        logs.global.forEach((msg) => {
            globalLog += `${msg}\n`;
        });
        return globalLog;
    }
};