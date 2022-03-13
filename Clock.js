let Seconds = 0
let Minutes = 0
let Hours = 0
setInterval(() => {
++Seconds; w.doAnnounce(`${Hours}h ${Minutes}m ${Seconds}s`); if (Seconds>60) {++Minutes; Seconds = 0}; if (Minutes>60) {++Hours; Minutes = 0}
},1000)
