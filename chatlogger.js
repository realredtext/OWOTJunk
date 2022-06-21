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

/*storing chat logs:
1. export chat log and remove apostrophes around log
2. put chat log in text editor
3. save log as HTML file
4. open log in browser
*/
const exportLogs = {
    page: () => {
        let pageLog = "";
        logs.page.forEach((msg) => {
            pageLog += `<div><span>${msg}</span></div><br>`;
        });
        return pageLog;
    },

    global: () => {
        let globalLog = "";
        logs.global.forEach((msg) => {
            globalLog += `<div><span>${msg}</span></div><br>`;
        });
        return globalLog;
    }
};
