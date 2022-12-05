
var qNum = 0;		//qNum = question number
qNum++;

var score = 0;
score++;

//when the begin button is pressed,
function begin() {
	timer = 60;  //to start the timer when the first question is presented
	disappear.innerHTML = "";
	question.innerHTML = questions[0];
	message002.innerHTML ="<button class=btn01 id=ansBtn id=ansBtn onclick=q11i()>"+choices01[0]+"</button><button class=btn02 id=ansBtn id=ansBtn onclick=q12c()>"+choices01[1]+"</button><br/><br/><button class=btn01 id=ansBtn id=ansBtn onclick=q13i()>"+choices01[2]+"</button><button class=btn02 id=ansBtn id=ansBtn onclick=q14i()>"+choices01[3]+"</button>";
	questionNum.innerHTML = qNum++ + " of 10";
}


//looping through questions to display them
function nextQuestion() {
	if (qNum == "2") {
		question.innerHTML = questions[1];
		message002.innerHTML ="<button class=btn01 id=ansBtn onclick=q21c()>"+choices02[0]+"</button><button class=btn02 id=ansBtn onclick=q22i()>"+choices02[1]+"</button><br/><br/><button class=btn01 id=ansBtn onclick=q23i()>"+choices02[2]+"</button><button class=btn02 id=ansBtn onclick=q24i()>"+choices02[3]+"</button>";
		message003.innerHTML = "";
		questionNum.innerHTML = qNum++ + " of 10";
		message004.innerHTML = "";
	}

	else if (qNum == "3") {
		question.innerHTML = questions[2];
		message002.innerHTML ="<button class=btn01 id=ansBtn onclick=q31i()>"+choices03[0]+"</button><button class=btn02 id=ansBtn onclick=q32c()>"+choices03[1]+"</button><br/><br/><button class=btn01 id=ansBtn onclick=q33i()>"+choices03[2]+"</button><button class=btn02 id=ansBtn onclick=q34i()>"+choices03[3]+"</button>";
		message003.innerHTML = "";
		questionNum.innerHTML = qNum++ + " of 10";
		message004.innerHTML = "";
	}

	else if (qNum == "4") {
		question.innerHTML = questions[3];
		message002.innerHTML = "<button class=btn01 id=ansBtn onclick=q41i()>"+choices04[0]+"</button><button class=btn02 id=ansBtn onclick=q42i()>"+choices04[1]+"</button><br/><br/><button class=btn01 id=ansBtn onclick=q43i()>"+choices04[2]+"</button><button class=btn02 id=ansBtn onclick=q44c()>"+choices04[3]+"</button>";
		message003.innerHTML = "";
		questionNum.innerHTML = qNum++ + " of 10";
		message004.innerHTML = "";
	}

	else if (qNum == "5") {
		question.innerHTML = questions[4];
		message002.innerHTML ="<button class=btn01 id=ansBtn onclick=q51i()>"+choices05[0]+"</button><button class=btn02 id=ansBtn onclick=q52i()>"+choices05[1]+"</button><br/><br/><button class=btn01 id=ansBtn onclick=q53i()>"+choices05[2]+"</button><button class=btn02 id=ansBtn onclick=q54c()>"+choices05[3]+"</button>";

		message003.innerHTML = "";
		questionNum.innerHTML = qNum++ + " of 10";
		message004.innerHTML = "";
	}

	else if (qNum == "6") {
		question.innerHTML = questions[5];
		message002.innerHTML = "<button class=btn01 id=ansBtn onclick=q61i()>"+choices06[0]+"</button><button class=btn02 id=ansBtn onclick=q62i()>"+choices06[1]+"</button><br/><br/><button class=btn01 id=ansBtn onclick=q63c()>"+choices06[2]+"</button><button class=btn02 id=ansBtn onclick=q64i()>"+choices06[3]+"</button>";
		message003.innerHTML = "";
		questionNum.innerHTML = qNum++ + " of 10";
		message004.innerHTML = "";
	}

	else if (qNum == "7") {
		question.innerHTML = questions[6];
		message002.innerHTML = "<button class=btn01 id=ansBtn onclick=q71i()>"+choices07[0]+"</button><button class=btn02 id=ansBtn onclick=q72c()>"+choices07[1]+"</button><br/><br/><button class=btn01 id=ansBtn onclick=q73i()>"+choices07[2]+"</button><button class=btn02 id=ansBtn onclick=q74i()>"+choices07[3]+"</button>";
		message003.innerHTML = "";
		questionNum.innerHTML = qNum++ + " of 10";
		message004.innerHTML = "";
	}

	else if (qNum == "8") {
		question.innerHTML = questions[7];
		message002.innerHTML = "<button class=btn01 id=ansBtn onclick=q81c()>"+choices08[0]+"</button><button class=btn02 id=ansBtn onclick=q82i()>"+choices08[1]+"</button><br/><br/><button class=btn01 id=ansBtn onclick=q83i()>"+choices08[2]+"</button><button class=btn02 id=ansBtn onclick=q84i()>"+choices08[3]+"</button>";
		message003.innerHTML = "";
		questionNum.innerHTML = qNum++ + " of 10";
		message004.innerHTML = "";
	}

	else if (qNum == "9") {
		question.innerHTML = questions[8];
		message002.innerHTML = "<button class=btn01 id=ansBtn onclick=q91c()>"+choices09[0]+"</button><button class=btn02 id=ansBtn onclick=q92i()>"+choices09[1]+"</button><br/><br/><button class=btn01 id=ansBtn onclick=q93i()>"+choices09[2]+"</button><button class=btn02 id=ansBtn onclick=q94i()>"+choices09[3]+"</button>";
		message003.innerHTML = "";
		questionNum.innerHTML = qNum++ + " of 10";
		message004.innerHTML = "";
	}

	else if (qNum == "10") {
		question.innerHTML = questions[9];
		message002.innerHTML = "<button class=btn01 id=ansBtn id=ansBtn onclick=q101i()>"+choices10[0]+"</button><button class=btn02 id=ansBtn onclick=q102i()>"+choices10[1]+"</button><br/><br/><button class=btn01 id=ansBtn onclick=q103c()>"+choices10[2]+"</button><button class=btn02 id=ansBtn onclick=q104i()>"+choices10[3]+"</button>";
		message003.innerHTML = "";
		questionNum.innerHTML = qNum++ + " of 10";
		message004.innerHTML = "";
	} 
	else {
		window.clearInterval(update);
		timer = "-";
		question.innerHTML = "End of Quiz";
		message002.innerHTML = "You scored "+ --score;
		message003.innerHTML = "<button class=btnPerformance id=ansBtn onclick=performance()>Performance</button>";
		message004.innerHTML = "";
		
	}
}


function setTimer() {
	timer = timer - 1;
	if (timer < 60) {
		timerId.innerHTML = timer;  //if timer variable value is less than 60 seconds, timer=timer-1
	}
	if (timer < 1) {  // if timer is less than 1
		window.clearInterval(update);
		question.innerHTML = "Time's up";
		message002.innerHTML = "You scored "+ --score;
		message003.innerHTML = "<button class=btnPerformance id=ansBtn onclick=performance()>Performance</button>";
		message004.innerHTML = "";
	}
}
update = setInterval("setTimer()", 1000);  //1000 ms


