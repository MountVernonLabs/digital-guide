function OnLoad() {
    // Check for mobile user agent
    if (UnityLoader.SystemInfo.mobile) {
        alert("This expierence uses WebGL and is optimized for desktop web browsers.");
    }
}


function UnityProgress(gameInstance, progress) {
	if (!gameInstance.Module)
		return;
	if (!gameInstance.logo) {
		gameInstance.logo = document.createElement("div");
		gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
		gameInstance.container.appendChild(gameInstance.logo);
	}
	if (!gameInstance.progress) {    
		gameInstance.progress = document.createElement("div");
		gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
		gameInstance.progress.empty = document.createElement("div");
		gameInstance.progress.empty.className = "empty";
		gameInstance.progress.appendChild(gameInstance.progress.empty);
		gameInstance.progress.full = document.createElement("div");
		gameInstance.progress.full.className = "full";
		gameInstance.progress.appendChild(gameInstance.progress.full);
		document.body.appendChild(gameInstance.progress);
	}
  
	if(!gameInstance.progressMessage) {
		gameInstance.progressMessage = document.createElement("div");
		gameInstance.progressMessage.className = "progressMessage";
		gameInstance.progressMessage.message = document.createElement("p");
		gameInstance.progressMessage.appendChild(gameInstance.progressMessage.message);
		document.body.appendChild(gameInstance.progressMessage);
	}
  
	gameInstance.progress.full.style.width = (100 * progress) + "%";
	gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";
	gameInstance.progressMessage.message.innerHTML = "3D Map Downloading ... " + (Math.ceil(progress * 100)) + "%";
	if (progress == 1) {
		gameInstance.progressMessage.message.innerHTML = "3D Map Loading ...";
	}
	if(progress == "complete") {
		document.body.removeChild(gameInstance.progress);
		document.body.removeChild(gameInstance.progressMessage);
		document.body.removeChild(document.getElementById("mount_vernon_title"));
		document.getElementById("gameContainer").removeAttribute("hidden");
	}
}
	