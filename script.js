var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var ball = document.getElementById("ball");
var i = 0;
var randomColor = Math.floor(Math.random()*1000000);
m1.style.backgroundColor = "#" + randomColor;
m2.style.backgroundColor = "#" + randomColor;
var randomMargin = Math.floor(Math.random()*100);

function magic() {
	var random = Math.floor(Math.random()*1000000);
	 randomColor = Math.floor(Math.random()*1000000);
	 randomMargin = Math.floor(Math.random()*100);
	i += 1;


	var ballColor = randomColor - 12345;



	ball.style.backgroundColor = "#" + ballColor;


	if (randomMargin > 10) {
		ball.style.width = Math.floor(Math.random()*100 + 10) + "px";
		ball.style.height = Math.floor(Math.random()*100 + 10)  + "px";
	}


	if (randomMargin%2===1) {
		ball.style.marginLeft = randomMargin + "px";
		ball.style.borderRadius = "0";
	}
	else if (randomMargin%2===0) {
		ball.style.marginLeft = -randomMargin + "px";
		ball.style.borderRadius = "100%";
	}


	


	if (randomMargin%2===1) {
		ball.style.marginTop = randomMargin + "px";
	}
	else if (randomMargin%2===0) {
		ball.style.marginTop = -randomMargin + "px";
	}


	


	if (i%2===0) {
		m1.style.backgroundColor = "#" + randomColor;
		m1.style.animation = "example 0.5s forwards";
		m2.style.animation = "0";
	}
	else if (i%2===1) {
		m2.style.backgroundColor = "#" + randomColor;
		m2.style.animation = "example 0.5s forwards";
		m1.style.animation = "0";

	}

	console.log(randomMargin)
}