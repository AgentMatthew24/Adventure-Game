/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening= document.querySelector(".story-opening");
let optionOne= document.querySelector(".option-one");
let optionTwo= document.querySelector(".option-two");
let optionOneScreen= document.querySelector(".option-one-screen");
let optionTwoScreen= document.querySelector(".option-two-screen");
let optionOneEnd= document.querySelector(".option-one-end");
let optionTwoEnd= document.querySelector(".option-two-end");
let continueButton = document.querySelector(".continue-button");
let continueOneEnd = document.querySelector("#continue-one-end");
let continueTwoEnd = document.querySelector("#continue-two-end");
let restartButton = document.querySelector("#restart")

optionOne.onclick=function(){
	optionOne.style.display="none";
	optionTwo.style.display="none";
	storyOpening.style.display="none";
	optionOneScreen.style.display="block";
	continueButton.style.display="block";
	restartButton.style.display="none";
}
optionTwo.onclick=function(){
	optionTwoScreen.style.display="block";
	optionOne.style.display="none";
	optionTwo.style.display="none";
	storyOpening.style.display="none";
	continueButton.style.display="block";
	restartButton.style.display="none";
}
	
continueOneEnd.onclick=function(){
	optionOneEnd.style.display="block";
	optionOneScreen.style.display="none";
	optionTwoScreen.style.display="none";
	optionOne.style.display="none";
	optionTwo.style.display="none";
	continueButton.style.display="none";
	restartButton.style.display="block";
}

continueTwoEnd.onclick=function(){
	optionTwoEnd.style.display="block";
	optionOneScreen.style.display="none";
	optionTwoScreen.style.display="none";
	optionOne.style.display="none";
	optionTwo.style.display="none";
	continueButton.style.display="none";
	restartButton.style.display="block";
}

restartButton.onclick=function(){
	optionOne.style.display="block";
	optionTwo.style.display="block";
	storyOpening.style.display="block";
	optionOneEnd.style.display="none";
	optionTwoEnd.style.display="none";
	restartButton.style.display="none";
	continueButton.style.display="none";
	
	
}
/*
};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};
*/