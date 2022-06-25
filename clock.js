let announceDate = () => {
    w.doAnnounce(Date().slice(0, 24));
};

setInterval(announceDate, 1000);
