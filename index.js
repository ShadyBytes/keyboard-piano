let keyA = new Audio("./media/A.mp3");
let keyS = new Audio("./media/S.mp3");
let keyD = new Audio("./media/D.mp3");
let keyF = new Audio("./media/F.mp3");
let keyG = new Audio("./media/G.mp3");
let keyH = new Audio("./media/H.mp3");
let keyJ = new Audio("./media/J.mp3");
let keyE = new Audio("./media/E.mp3");
let keyT = new Audio("./media/T.mp3");
let keyU = new Audio("./media/U.mp3");
let keyW = new Audio("./media/W.mp3");
let keyY = new Audio("./media/Y.mp3");

document.addEventListener("keypress", function (e) {
    if(e.code == "KeyA"){
        keyA.play();
    } else if (e.code == "KeyS"){
        keyS.play();
    } else if (e.code == "KeyD"){
        keyD.play();
    } else if (e.code == "KeyF"){
        keyF.play();
    } else if (e.code == "KeyG"){
        keyG.play();
    } else if (e.code == "KeyH"){
        keyH.play();
    } else if (e.code == "KeyJ"){
        keyJ.play();
    } else if (e.code == "KeyE"){
        keyE.play();
    } else if (e.code == "KeyT"){
        keyT.play();
    } else if (e.code == "KeyU"){
        keyU.play();
    } else if (e.code == "KeyW"){
        keyW.play();
    } else if (e.code == "KeyY"){
        keyY.play();
    }
})
document.addEventListener("keyup", function (e) {
	if(e.code == "KeyA"){
		AudioFader(keyA);
    } else if (e.code == "KeyS"){
        AudioFader(keyS);
    } else if (e.code == "KeyD"){
        AudioFader(keyD);
    } else if (e.code == "KeyF"){
        AudioFader(keyF);
    } else if (e.code == "KeyG"){
        AudioFader(keyG);
    } else if (e.code == "KeyH"){
        AudioFader(keyH);
    } else if (e.code == "KeyJ"){
        AudioFader(keyJ);
    } else if (e.code == "KeyE"){
        AudioFader(keyE);
    } else if (e.code == "KeyT"){
        AudioFader(keyT);
    } else if (e.code == "KeyU"){
        AudioFader(keyU);
    } else if (e.code == "KeyW"){
        AudioFader(keyW);
    } else if (e.code == "KeyY"){
		AudioFader(keyY);
    }
})

async function AudioFader (audio2Fade) {

    var sound = audio2Fade;

    var fadeAudio = setInterval(function () {
        if (sound.volume >= 0.03) {
            sound.volume -= 0.03;
			console.log(sound.volume);
        } else { sound.pause();
			sound.volume = 1;
			sound.currentTime = 0;
			clearInterval(fadeAudio);
		}
    }, 20);
}