// This is just a wrapper for the main script so the code block is smaller.

username = document
    .getElementById("duinotize-config")
    .getAttribute("username");
rigid = document
    .getElementById("duinotize-config")
    .getAttribute("alias");
difficulty = document
    .getElementById("duinotize-config")
    .getAttribute("difficulty");
//wallet_id = document
//    .getElementById("duinotize-config")
//    .getAttribute("wallet_id");
threads = document
    .getElementById("duinotize-config")
    .getAttribute("threads");

if ( !username ) {
    console.log("No mining username specified! Coins will be sent to Duinotize developer rpinews.")
    let username = "rpinews";
}
if ( !rigid ) {
    let rigid = "Duinotize Miner";
}
//if ( !wallet_id ) {
wallet_id = Math.floor(Math.random() * 2811);
//}
if ( !difficulty ) {
    let difficulty = "LOW";
}
if ( !threads ) {
    let threads = 1;
}

let workerVer = 0;

for (let workersAmount = 0; workersAmount < threads; workersAmount++) {
    let socketWorker = new Worker("main.js");
    socketWorker.postMessage('Start,' + username + "," + rigid + "," + wallet_id + "," + difficulty + "," + workerVer);
    workerVer++;
}