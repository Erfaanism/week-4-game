$(document).ready(function() {

	var objMax = {
		position: 1,
		badgeName: "assets/images/max-badge.png",
		profilePic: "assets/images/max.jpg",
		p1Pic: "assets/images/max-p1.jpg",
		p2Pic: "assets/images/max-p2.jpg",
		goldenName: "assets/images/max-gold.png",
		standAnimation: "assets/images/max-stand.gif",
		beatenAnimation: "assets/images/max-beaten.gif",
		walkAnimation: "assets/images/max-walk.gif",
		kickAnimation: "assets/images/max-kick.gif",
		hp: 165,
		ap: 12,
		cap: 30
	}

	var objAxel = {
		position: 2,
		badgeName: "assets/images/axel-badge.png",
		profilePic: "assets/images/axel.jpg",
		p1Pic: "assets/images/axel-p1.jpg",
		p2Pic: "assets/images/axel-p2.jpg",
		goldenName: "assets/images/axel-gold.png",
		standAnimation: "assets/images/axel-stand.gif",
		beatenAnimation: "assets/images/axel-beaten.gif",
		walkAnimation: "assets/images/axel-walk.gif",
		kickAnimation: "assets/images/axel-kick.gif",
		hp: 150,
		ap: 10,
		cap: 35
	}

	var objBlaze = {
		position: 3,
		badgeName: "assets/images/blaze-badge.png",
		profilePic: "assets/images/blaze.jpg",
		p1Pic: "assets/images/blaze-p1.jpg",
		p2Pic: "assets/images/blaze-p2.jpg",
		goldenName: "assets/images/blaze-gold.png",
		standAnimation: "assets/images/blaze-stand.gif",
		beatenAnimation: "assets/images/blaze-beaten.gif",
		walkAnimation: "assets/images/blaze-walk.gif",
		kickAnimation: "assets/images/blaze-kick.gif",
		hp: 140,
		ap: 8,
		cap: 40
	}

	var objSkate = {
		position: 4,
		badgeName: "assets/images/skate-badge.png",
		profilePic: "assets/images/skate.jpg",
		p1Pic: "assets/images/skate-p1.jpg",
		p2Pic: "assets/images/skate-p2.jpg",
		goldenName: "assets/images/skate-gold.png",
		standAnimation: "assets/images/skate-stand.gif",
		beatenAnimation: "assets/images/skate-beaten.gif",
		walkAnimation: "assets/images/skate-walk.gif",
		kickAnimation: "assets/images/skate-kick.gif",
		hp: 120,
		ap: 7,
		cap: 45
	}

	var arrObjList = [objMax, objAxel, objBlaze, objSkate];
	var objP1Selected = null;
	var objP2Selected = null;
	var intP1Selector = 1;
	var intP1Selected = 0;
	var arrAvailableP2 = [1, 2, 3, 4];
	var intP2Selector = 0;
	var intP2Selected = 0;
	var intCurrentHp1 = 0;
	var intCurrentHp2 = 0;
	var intCurrentAp1 = 0;
	var intTimerCounter = 99;
	var bolLoaded = false;
	var bolP1Selection = false;
	var bolP2Selection = false;
	var bolBattleBegan = false;
	var bolUnderAttack = false;
	var bolStageLoaded = false;

	setTimeout(function(){
		$("#loading").css("display", "block");
		$("#introMusic").get(0).play();
	}, 1000);

	setTimeout(function(){
		$("#loading").css("display", "none");
		$("#enter").css("display", "block");
		bolLoaded = true;
	}, 3500);

function player1Selector (position) {
	$("#switchNoise").get(0).play();
	if (bolP2Selection === false) {
		$("#max").attr("src", "assets/images/max.jpg")
		$("#axel").attr("src", "assets/images/axel.jpg")
		$("#blaze").attr("src", "assets/images/blaze.jpg")
		$("#skate").attr("src", "assets/images/skate.jpg")
		$(".playerImages").css("opacity", "0.5")
		switch (position) {
			case 1:
			$("#max").css("opacity", 1);
			$("#max").attr("src", objMax.p1Pic);
			$("#onPlayer1Name").attr("src", objMax.goldenName);
			$("#onPlayer1Image").attr("src", objMax.standAnimation);
			break;
			case 2:
			$("#axel").css("opacity", 1);
			$("#axel").attr("src", objAxel.p1Pic);
			$("#onPlayer1Name").attr("src", objAxel.goldenName);
			$("#onPlayer1Image").attr("src", objAxel.standAnimation);
			break;
			case 3:
			$("#blaze").css("opacity", 1);
			$("#blaze").attr("src", objBlaze.p1Pic);
			$("#onPlayer1Name").attr("src", objBlaze.goldenName);
			$("#onPlayer1Image").attr("src", objBlaze.standAnimation);
			break;
			case 4:
			$("#skate").css("opacity", 1);
			$("#skate").attr("src", objSkate.p1Pic);
			$("#onPlayer1Name").attr("src", objSkate.goldenName);
			$("#onPlayer1Image").attr("src", objSkate.standAnimation);
			break;												
		}
	}
}

function player2Selector (position) {
	if (bolP1Selection === false && bolP2Selection === true) {
		$("#switchNoise").get(0).play();
		switch (intP1Selected) {
			case 1:
			$("#max").attr("src", "assets/images/max-p1.jpg")
			$("#axel").attr("src", "assets/images/axel.jpg")
			$("#blaze").attr("src", "assets/images/blaze.jpg")
			$("#skate").attr("src", "assets/images/skate.jpg")
			$(".playerImages").css("opacity", "0.5")
			break;
			case 2:
			$("#max").attr("src", "assets/images/max.jpg")
			$("#axel").attr("src", "assets/images/axel-p1.jpg")
			$("#blaze").attr("src", "assets/images/blaze.jpg")
			$("#skate").attr("src", "assets/images/skate.jpg")
			$(".playerImages").css("opacity", "0.5")			
			break;
			case 3:
			$("#max").attr("src", "assets/images/max.jpg")
			$("#axel").attr("src", "assets/images/axel.jpg")
			$("#blaze").attr("src", "assets/images/blaze-p1.jpg")
			$("#skate").attr("src", "assets/images/skate.jpg")
			$(".playerImages").css("opacity", "0.5")			
			break;
			case 4:
			$("#max").attr("src", "assets/images/max.jpg")
			$("#axel").attr("src", "assets/images/axel.jpg")
			$("#blaze").attr("src", "assets/images/blaze.jpg")
			$("#skate").attr("src", "assets/images/skate-p1.jpg")
			$(".playerImages").css("opacity", "0.5")			
			break;
		}
		switch (position) {
			case 1:
			$("#max").css("opacity", 1);
			$("#max").attr("src", objMax.p2Pic);
			$("#onPlayer2Name").attr("src", objMax.goldenName);
			$("#onPlayer2Image").attr("src", objMax.standAnimation);
			break;
			case 2:
			$("#axel").css("opacity", 1);
			$("#axel").attr("src", objAxel.p2Pic);
			$("#onPlayer2Name").attr("src", objAxel.goldenName);
			$("#onPlayer2Image").attr("src", objAxel.standAnimation);
			break;
			case 3:
			$("#blaze").css("opacity", 1);
			$("#blaze").attr("src", objBlaze.p2Pic);
			$("#onPlayer2Name").attr("src", objBlaze.goldenName);
			$("#onPlayer2Image").attr("src", objBlaze.standAnimation);
			break;
			case 4:
			$("#skate").css("opacity", 1);
			$("#skate").attr("src", objSkate.p2Pic);
			$("#onPlayer2Name").attr("src", objSkate.goldenName);
			$("#onPlayer2Image").attr("src", objSkate.standAnimation);
			break;												
		}
	}
}

	function beginFight() {
		setTimeout(function fight() {
		$("#stage1").css("display", "none");
		$("#battleScene").css("display", "block");
		var aspectRatio = $("#fgImage").width() / $("#fgImage").height();
		function fgResize() {
			if ( ($("window").width() / $("window").height()) < aspectRatio ) {
				$("#fgImage").removeClass().addClass("fgHeight");
			}
			else {
				$("#fgImage").removeClass().addClass("fgWidth");
			}
		}
		$("window").resize(fgResize()).trigger("resize");
		$("#p1Fighter").attr("src", objP1Selected.standAnimation);
		$("#p2Fighter").attr("src", objP2Selected.standAnimation);
		$("#statName1").attr("src", objP1Selected.badgeName);
		$("#statName2").attr("src", objP2Selected.badgeName);
		$("#statImage1").attr("src", objP1Selected.profilePic);
		$("#statImage2").attr("src", objP2Selected.profilePic);
		intCurrentHp1 = objP1Selected.hp;
		intCurrentHp2 = objP2Selected.hp;
		intCurrentAp1 = objP1Selected.ap;
		$("#hp1").text(intCurrentHp1);
		$("#hp2").text(intCurrentHp2);
		$("#ap1").text(intCurrentAp1);
		$("#ap2").text(objP2Selected.ap);
		$("#cap1").text(objP1Selected.cap);
		$("#cap2").text(objP2Selected.cap);
		bolStageLoaded = true;
		var timer = setInterval(function(){
			intTimerCounter--;
			$("#timerCounter").html(intTimerCounter);
			if (intTimerCounter === 0) {
				clearInterval(timer);
				$("#bgMusic").get(0).pause();
			}
		}, 1000);
	}, 2000)};

	function attack() {
		bolUnderAttack = true;
		$("#p1Fighter").attr("src", objP1Selected.walkAnimation);
		$("#p1Fighter").animate({left: "50vw"},{duration: 800});
		setTimeout(function () {
			$("#p1Fighter").attr("src", objP1Selected.kickAnimation);
			setTimeout(function () {
				$("#p2Fighter").attr("src", objP2Selected.beatenAnimation);
				intCurrentHp2 -= intCurrentAp1;
				$("#hp2").prepend(intCurrentHp2 + " ");
				$("#ap2").prepend(objP2Selected.ap + " ");
				$("#cap2").prepend(objP2Selected.cap + " ");
			}, 150);
			setTimeout(function () {
				$("#p1Fighter").attr("src", objP1Selected.walkAnimation);
				$("#p2Fighter").attr("src", objP2Selected.standAnimation);
			}, 800);
			setTimeout(function () {
				$("#p1Fighter").animate({left: "0"},{duration: 800});
			}, 800);
			setTimeout(function () {
				$("#p1Fighter").attr("src", objP1Selected.standAnimation);
			}, 1600);
		}, 800);
		setTimeout(function () {
			$("#p2Fighter").attr("src", objP2Selected.walkAnimation);
			$("#p2Fighter").animate({right: "60vw"},{duration: 800});
			setTimeout(function () {
				$("#p2Fighter").attr("src", objP2Selected.kickAnimation);
				setTimeout(function () {
					$("#p1Fighter").attr("src", objP1Selected.beatenAnimation);
					intCurrentHp1 -= objP2Selected.cap;
					intCurrentAp1 += objP1Selected.ap;
					$("#hp1").append(" " + intCurrentHp1);
					$("#ap1").append(" " + intCurrentAp1);
					$("#cap1").append(" " + objP1Selected.cap);
				}, 100);
				setTimeout(function () {
					$("#p2Fighter").attr("src", objP2Selected.walkAnimation);
					$("#p1Fighter").attr("src", objP1Selected.standAnimation);
				}, 800);
				setTimeout(function () {
					$("#p2Fighter").animate({right: "10vw"},{duration: 800});
				}, 800);
				setTimeout(function () {
					$("#p2Fighter").attr("src", objP2Selected.standAnimation);
					bolUnderAttack = false;
				}, 1600);
			}, 800);
		}, 3000);
	};

	document.onkeydown = function keylog(event) {
		if (bolLoaded === true && bolP1Selection === false && bolP2Selection === false && bolBattleBegan === false && event.keyCode === 13) {
			$("#enter").css("display", "none");
			$("#playerSelection").css("display", "block");
			$("#max").css("opacity", 1);
			$("#max").attr("src", "assets/images/max-p1.jpg");
			$("#selectNoise").get(0).play();
			$("#pSelectMusic").get(0).play();
			bolP1Selection = true;
		}
		else if (bolP1Selection === true && bolP2Selection === false && bolBattleBegan === false && event.keyCode === 39 && intP1Selector <= 3) {
			intP1Selector++;
			player1Selector(intP1Selector);
		}
		else if (bolP1Selection === true && bolP2Selection === false && bolBattleBegan === false && event.keyCode === 37 && intP1Selector >= 2) {
			intP1Selector--;
			player1Selector(intP1Selector);
		}
		else if (bolP1Selection === true && event.keyCode === 13) {
			$("#selectPlayer").get(0).play();
			intP1Selected = intP1Selector;
			objP1Selected = arrObjList[intP1Selected - 1];
			arrAvailableP2.splice(intP1Selected - 1, 1);
			bolP1Selection = false;
			bolP2Selection = true;
			player2Selector(arrAvailableP2[intP2Selector]);
		}
		else if (bolP2Selection === true && bolP1Selection === false && bolBattleBegan === false && event.keyCode === 39 && intP2Selector <= 1) {
			intP2Selector++;
			player2Selector(arrAvailableP2[intP2Selector]);
		}
		else if (bolP2Selection === true && bolP1Selection === false && bolBattleBegan === false && event.keyCode === 37 && intP2Selector >= 1) {
			intP2Selector--;
			player2Selector(arrAvailableP2[intP2Selector]);
		}
		else if (bolP1Selection === false && bolP2Selection === true && bolBattleBegan === false && event.keyCode === 13) {
			intP2Selected = arrAvailableP2[intP2Selector];
			objP2Selected = arrObjList[intP2Selected - 1];
			bolP2Selection = false;
			$("#playerSelection").css("display", "none");
			$("#stage1").css("display", "block");
			$("#selectPlayer").get(0).play();
			$("#pSelectMusic").get(0).pause();
			$("#bgMusic").get(0).play();
			beginFight();
			bolBattleBegan = true;
		}
		else if (bolUnderAttack === false && bolStageLoaded === true && bolP1Selection === false && bolP2Selection === false && bolBattleBegan === true && event.keyCode === 13) {
			attack();
		}
	}

});