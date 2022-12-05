/* Showing the performance of the quiz*/

// defalt variable to be displayed if the questions the user didnt get to answer
var show01=questions[0]+"<br/>"+choices01[0]+"<img class=imgQ src=images_St03/qMark.png /><br/>&#10004;"+choices01[1]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices01[2]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices01[3]+"<img class=imgQ src=images_St03/qMark.png /><br/>";
var show02="<br/>"+questions[1]+"<br/><br/>&#10004;"+choices02[0]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices02[1]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices02[2]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices02[3]+"<img class=imgQ src=images_St03/qMark.png /><br/>";
var show03="<br/>"+questions[2]+"<br/><br/>"+choices03[0]+"<img class=imgQ src=images_St03/qMark.png /><br/>&#10004;"+choices03[1]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices03[2]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices03[3]+"<img class=imgQ src=images_St03/qMark.png /><br/>";
var show04="<br/>"+questions[3]+"<br/><br/>"+choices04[0]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices04[1]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices04[2]+"<img class=imgQ src=images_St03/qMark.png /><br/>&#10004;"+choices04[3]+"<img class=imgQ src=images_St03/qMark.png /><br/>";
var show05="<br/>"+questions[4]+"<br/><br/>"+choices05[0]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices05[1]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices05[2]+"<img class=imgQ src=images_St03/qMark.png /><br/>&#10004;"+choices05[3]+"<img class=imgQ src=images_St03/qMark.png /><br/>";
var show06="<br/>"+questions[5]+"<br/><br/>"+choices06[0]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices06[1]+"<img class=imgQ src=images_St03/qMark.png /><br/>&#10004;"+choices06[2]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices06[3]+"<img class=imgQ src=images_St03/qMark.png /><br/>";
var show07="<br/>"+questions[6]+"<br/><br/>"+choices07[0]+"<img class=imgQ src=images_St03/qMark.png /><br/>&#10004;"+choices07[1]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices07[2]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices07[3]+"<img class=imgQ src=images_St03/qMark.png /><br/>";
var show08="<br/>"+questions[7]+"<br/><br/>&#10004;"+choices08[0]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices08[1]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices08[2]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices08[3]+"<img class=imgQ src=images_St03/qMark.png /><br/>";
var show09="<br/>"+questions[8]+"<br/><br/>&#10004;"+choices09[0]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices09[1]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices09[2]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices09[3]+"<img class=imgQ src=images_St03/qMark.png /><br/>";
var show10="<br/>"+questions[9]+"<br/><br/>"+choices10[0]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices10[1]+"<img class=imgQ src=images_St03/qMark.png /><br/>&#10004;"+choices10[2]+"<img class=imgQ src=images_St03/qMark.png /><br/>"+choices10[3]+"<img class=imgQ src=images_St03/qMark.png /><br/>";


// question 01 performnce
function q11i() {
	score-=1;
	nextQuestion();
	show01=questions[0]+"<br/><br/>&#10006;"+choices01[0]+"<br/>&#10004;"+choices01[1]+"<br/>"+choices01[2]+"<br/>"+choices01[3]+"<br/>";}
function q12c() {
	score+=2;
	nextQuestion();
	show01=questions[0]+"<br/><br/>"+choices01[0]+"<br/>&#10004;"+choices01[1]+"<br/>"+choices01[2]+"<br/>"+choices01[3]+"<br/>";}
function q13i() {
	score-=1;
	nextQuestion();
	show01=questions[0]+"<br/><br/>"+choices01[0]+"<br/>&#10004;"+choices01[1]+"<br/>&#10006;"+choices01[2]+"<br/>"+choices01[3]+"<br/>";}
function q14i() {
	score-=1;
	nextQuestion();
	show01=questions[0]+"<br/><br/>"+choices01[0]+"<br/>&#10004;"+choices01[1]+"<br/>"+choices01[2]+"<br/>&#10006;"+choices01[3]+"<br/>";}

	
	//question 02 performance
function q21c() {
	score+=2;
	nextQuestion();
	show02="<br/>"+questions[1]+"<br/><br/>&#10004;"+choices02[0]+"<br/>"+choices02[1]+"<br/>"+choices02[2]+"<br/>"+choices02[3]+"<br/>";}
function q22i() {
	score-=1;
	nextQuestion();
	show02="<br/>"+questions[1]+"<br/><br/>&#10004;"+choices02[0]+"<br/>&#10006;"+choices02[1]+"<br/>"+choices02[2]+"<br/>"+choices02[3]+"<br/>";}
function q23i() {
	score-=1;
	nextQuestion();
	show02="<br/>"+questions[1]+"<br/><br/>&#10004;"+choices02[0]+"<br/>"+choices02[1]+"<br/>&#10006;"+choices02[2]+"<br/>"+choices02[3]+"<br/>";}
function q24i() {
	score-=1;
	nextQuestion();
	show02="<br/>"+questions[1]+"<br/><br/>&#10004;"+choices02[0]+"<br/>"+choices02[1]+"<br/>"+choices02[2]+"<br/>&#10006;"+choices02[3]+"<br/>";}

	
	//question 03 performance
function q31i() {
	score-=1;
	nextQuestion();
	show03="<br/>"+questions[2]+"<br/><br/>&#10006;"+choices03[0]+"<br/>&#10004;"+choices03[1]+"<br/>"+choices03[2]+"<br/>"+choices03[3]+"<br/>";
}
function q32c() {
	score+=2;
	nextQuestion();
	show03="<br/>"+questions[2]+"<br/><br/>"+choices03[0]+"<br/>&#10004;"+choices03[1]+"<br/>"+choices03[2]+"<br/>"+choices03[3]+"<br/>";
}
function q33i() {
	score-=1;
	nextQuestion();
	show03="<br/>"+questions[2]+"<br/><br/>"+choices03[0]+"<br/>&#10004;"+choices03[1]+"<br/>&#10006;"+choices03[2]+"<br/>"+choices03[3]+"<br/>";
}
function q34i() {
	score-=1;
	nextQuestion();
	show03="<br/>"+questions[2]+"<br/><br/>"+choices03[0]+"<br/>&#10004;"+choices03[1]+"<br/>"+choices03[2]+"<br/>&#10006;"+choices03[3]+"<br/>";
}


	//question 04 performance
function q41i() {
	score-=1;
	nextQuestion();
	show04="<br/>"+questions[3]+"<br/><br/>&#10006;"+choices04[0]+"<br/>"+choices04[1]+"<br/>"+choices04[2]+"<br/>&#10004;"+choices04[3]+"<br/>";
}
function q42i() {
	score-=1;
	nextQuestion();
	show04="<br/>"+questions[3]+"<br/><br/>"+choices04[0]+"<br/>&#10006;"+choices04[1]+"<br/>"+choices04[2]+"<br/>&#10004;"+choices04[3]+"<br/>";
}
function q43i() {
	score-=1;
	nextQuestion();
	show04="<br/>"+questions[3]+"<br/><br/>"+choices04[0]+"<br/>"+choices04[1]+"<br/>&#10006;"+choices04[2]+"<br/>&#10004;"+choices04[3]+"<br/>";
}
function q44c() {
	score+=2;
	nextQuestion();
	show04="<br/>"+questions[3]+"<br/><br/>"+choices04[0]+"<br/>"+choices04[1]+"<br/>"+choices04[2]+"<br/>&#10004;"+choices04[3]+"<br/>";
}
	
	
	//question 05 performance
function q51i() {
	score-=1;
	nextQuestion();
	show05="<br/>"+questions[4]+"<br/><br/>&#10006;"+choices05[0]+"<br/>"+choices05[1]+"<br/>"+choices05[2]+"<br/>&#10004;"+choices05[3]+"<br/>";
}
function q52i() {
	score-=1;
	nextQuestion();
	show05="<br/>"+questions[4]+"<br/><br/>"+choices05[0]+"<br/>&#10006;"+choices05[1]+"<br/>"+choices05[2]+"<br/>&#10004;"+choices05[3]+"<br/>";
}
function q53i() {
	score-=1;
	nextQuestion();
	show05="<br/>"+questions[4]+"<br/><br/>"+choices05[0]+"<br/>"+choices05[1]+"<br/>&#10006;"+choices05[2]+"<br/>&#10004;"+choices05[3]+"<br/>";
}
function q54c() {
	score+=2;
	nextQuestion();
	show05="<br/>"+questions[4]+"<br/><br/>"+choices05[0]+"<br/>"+choices05[1]+"<br/>"+choices05[2]+"<br/>&#10004;"+choices05[3]+"<br/>";
}


//question 06 performance
function q61i() {
	score-=1;
	nextQuestion();
	show06="<br/>"+questions[5]+"<br/><br/>&#10006;"+choices06[0]+"<br/>"+choices06[1]+"<br/>&#10004;"+choices06[2]+"<br/>"+choices06[3]+"<br/>";
}
function q62i() {
	score-=1;
	nextQuestion();
	show06="<br/>"+questions[5]+"<br/><br/>"+choices06[0]+"<br/>&#10006;"+choices06[1]+"<br/>&#10004;"+choices06[2]+"<br/>"+choices06[3]+"<br/>";
}
function q63c() {
	score+=2;
	nextQuestion();
	show06="<br/>"+questions[5]+"<br/><br/>"+choices06[0]+"<br/>"+choices06[1]+"<br/>&#10004;"+choices06[2]+"<br/>"+choices06[3]+"<br/>";
}
function q64i() {
	score-=1;
	nextQuestion();
	show06="<br/>"+questions[5]+"<br/><br/>"+choices06[0]+"<br/>"+choices06[1]+"<br/>&#10004;"+choices06[2]+"<br/>&#10006;"+choices06[3]+"<br/>";
}


//question 07 performance
function q71i() {
	score-=1;
	nextQuestion();
	show07="<br/>"+questions[6]+"<br/><br/>&#10006;"+choices07[0]+"<br/>&#10004;"+choices07[1]+"<br/>"+choices07[2]+"<br/>"+choices07[3]+"<br/>";
}
function q72c() {
	score+=2;
	nextQuestion();
	show07="<br/>"+questions[6]+"<br/><br/>"+choices07[0]+"<br/>&#10004;"+choices07[1]+"<br/>"+choices07[2]+"<br/>"+choices07[3]+"<br/>";
}
function q73i() {
	score-=1;
	nextQuestion();
	show07="<br/>"+questions[6]+"<br/><br/>"+choices07[0]+"<br/>&#10004;"+choices07[1]+"<br/>&#10006;"+choices07[2]+"<br/>"+choices07[3]+"<br/>";
	}
function q74i() {
	score-=1;
	nextQuestion();
	show07="<br/>"+questions[6]+"<br/><br/>"+choices07[0]+"<br/>&#10004;"+choices07[1]+"<br/>"+choices07[2]+"<br/>&#10006;"+choices07[3]+"<br/>";
}


//question 08 performance
function q81c() {
	score+=2;
	nextQuestion();
	show08="<br/>"+questions[7]+"<br/><br/>&#10004;"+choices08[0]+"<br/>"+choices08[1]+"<br/>"+choices08[2]+"<br/>"+choices08[3]+"<br/>";
}
function q82i() {
	score-=1;
	nextQuestion();
	show08="<br/>"+questions[7]+"<br/><br/>&#10004;"+choices08[0]+"<br/>&#10006;"+choices08[1]+"<br/>"+choices08[2]+"<br/>"+choices08[3]+"<br/>";
}
function q83i() {
	score-=1;
	nextQuestion();
	show08="<br/>"+questions[7]+"<br/><br/>&#10004;"+choices08[0]+"<br/>"+choices08[1]+"<br/>&#10006;"+choices08[2]+"<br/>"+choices08[3]+"<br/>";
}
function q84i() {
	score-=1;
	nextQuestion();
	show08="<br/>"+questions[7]+"<br/><br/>&#10004;"+choices08[0]+"<br/>"+choices08[1]+"<br/>"+choices08[2]+"<br/>&#10006;"+choices08[3]+"<br/>";
}


	//question 09 performance
function q91c() {
	score+=2;
	nextQuestion();
	show09="<br/>"+questions[8]+"<br/><br/>&#10004;"+choices09[0]+"<br/>"+choices09[1]+"<br/>"+choices09[2]+"<br/>"+choices09[3]+"<br/>";
}
function q92i() {
	score-=1;
	nextQuestion();
	show09="<br/>"+questions[8]+"<br/><br/>&#10004;"+choices09[0]+"<br/>&#10006;"+choices09[1]+"<br/>"+choices09[2]+"<br/>"+choices09[3]+"<br/>";
}
function q93i() {
	score-=1;
	nextQuestion();
	show09="<br/>"+questions[8]+"<br/><br/>&#10004;"+choices09[0]+"<br/>"+choices09[1]+"<br/>&#10006;"+choices09[2]+"<br/>"+choices09[3]+"<br/>";
}
function q94i() {
	score-=1;
	nextQuestion();
	show09="<br/>"+questions[8]+"<br/><br/>&#10004;"+choices09[0]+"<br/>"+choices09[1]+"<br/>"+choices09[2]+"<br/>&#10006;"+choices09[3]+"<br/>";
}


	//question 10 performance
function q101i() {
	score-=1;
	nextQuestion();
	show10="<br/>"+questions[9]+"<br/><br/>&#10006;"+choices10[0]+"<br/>"+choices10[1]+"<br/>&#10004;"+choices10[2]+"<br/>"+choices10[3]+"<br/>";
}
function q102i() {
	score-=1;
	nextQuestion();
	show10="<br/>"+questions[9]+"<br/><br/>"+choices10[0]+"<br/>&#10006;"+choices10[1]+"<br/>&#10004;"+choices10[2]+"<br/>"+choices10[3]+"<br/>";
}
function q103c() {
	score+=2;
	nextQuestion();
	show10="<br/>"+questions[9]+"<br/><br/>"+choices10[0]+"<br/>"+choices10[1]+"<br/>&#10004;"+choices10[2]+"<br/>"+choices10[3]+"<br/>";
}
function q104i() {
	score-=1;
	nextQuestion();
	show10="<br/>"+questions[9]+"<br/><br/>"+choices10[0]+"<br/>"+choices10[1]+"<br/>&#10004;"+choices10[2]+"<br/>&#10006;"+choices10[3]+"<br/>";
}

//to navigate to the main quiz page
function goBack(){
	window.open(beginQuiz.html);
}

function performance() {
	if (score>10){
		document.body.style.background = "url(images_St03/green9.jpg)";
		question.innerHTML ="<a href=#q1>Q01</a> | <a href=#q2>Q02</a> | <a href=#q3>Q03</a> | <a href=#q4>Q04</a> | <a href=#q5>Q05</a> | <a href=#q6>Q06</a> | <a href=#q7>Q07</a> | <a href=#q8>Q08</a> | <a href=#q9>Q09</a> | <a href=#q10>Q10</a>" ;
		message002.innerHTML = "**Well Done!! You scored : "+ score;
		message003.innerHTML ="<button class=btnBegin ><a href= quiz.html style=font-style:none>OK</a></button>";
		message004.innerHTML = "";
		q1.innerHTML=show01;
		q2.innerHTML=show02;
		q3.innerHTML=show03;
		q4.innerHTML=show04;
		q5.innerHTML=show05;
		q6.innerHTML=show06;
		q7.innerHTML=show07;
		q8.innerHTML=show08;
		q9.innerHTML=show09;
		q10.innerHTML=show10;
	}
	else if(score>=5){
		document.body.style.background = "url(images_St03/yellow2.jpg)";
		question.innerHTML ="<a href=#q1>Q01</a> | <a href=#q2>Q02</a> | <a href=#q3>Q03</a> | <a href=#q4>Q04</a> | <a href=#q5>Q05</a> | <a href=#q6>Q06</a> | <a href=#q7>Q07</a> | <a href=#q8>Q08</a> | <a href=#q9>Q09</a> | <a href=#q10>Q10</a>" ;
		message002.innerHTML = "**Good job!! You scored : "+ score;
		message003.innerHTML ="<button class=btnBegin ><a href= quiz.html style=font-style:none>OK</a></button>";
		message004.innerHTML = "";
		q1.innerHTML=show01;
		q2.innerHTML=show02;
		q3.innerHTML=show03;
		q4.innerHTML=show04;
		q5.innerHTML=show05;
		q6.innerHTML=show06;
		q7.innerHTML=show07;
		q8.innerHTML=show08;
		q9.innerHTML=show09;
		q10.innerHTML=show10;
	}
	else{
		
		document.body.style.background = "url(images_St03/red.jpg)";
		question.innerHTML =  "<a href=#q1>Q01</a> | <a href=#q2>Q02</a> | <a href=#q3>Q03</a> | <a href=#q4>Q04</a> | <a href=#q5>Q05</a> | <a href=#q6>Q06</a> | <a href=#q7>Q07</a> | <a href=#q8>Q08</a> | <a href=#q9>Q09</a> | <a href=#q10>Q10</a>";
		message002.innerHTML = "**Stay with us and learn more about Ella. You scored : "+ score;
		message003.innerHTML ="<button class=btnBegin ><a href= quiz.html style=font-style:none>OK</a></button>";
		message004.innerHTML = "";
		q1.innerHTML=show01;
		q2.innerHTML=show02;
		q3.innerHTML=show03;
		q4.innerHTML=show04;
		q5.innerHTML=show05;
		q6.innerHTML=show06;
		q7.innerHTML=show07;
		q8.innerHTML=show08;
		q9.innerHTML=show09;
		q10.innerHTML=show10;
	}
  
}


