
var menuButton = document.getElementsByClassName('menuBtn');
var mobileMenu = document.getElementsByClassName('mobileMenu');
var closeBtn = document.getElementsByClassName('closeBtn');
var tabletBtn = document.getElementsByClassName('tabletMenuBtn');

// loop to select all button elements necessary for manu
var mobileBtn = [];
for(var i = 0; i < 4; i++){
    mobileBtn.push(document.getElementsByClassName('mobileBtn')[i]);
}

// toggle menu position using active class
var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active');
}
// loop necessary to enable all buttons in menu to be clicked
for(var i = 0; i < 4; i++){
    mobileBtn[i].addEventListener('click', clickedBtn);
}

// OPEN MENU WITH MENU BUTTON
menuButton[0].addEventListener('click', clickedBtn);
// OPEN MENU WITH TABLET BUTTON
tabletBtn[0].addEventListener('click', clickedBtn);
// CLOSE MENU
closeBtn[0].addEventListener('click', clickedBtn);


// services section see more button
var seeMore = document.getElementsByClassName("seeMoreBtn");
//targeting child element "seeMore" 
var seeMoreDisplay = document.getElementsByClassName("seeMore");

var blockContainer = document.getElementsByClassName("blockContainer");
console.log(blockContainer[0]);

var seeMoreClicked = function() {
    blockContainer[0].classList.toggle('moreServices');
    seeMoreDisplay[0].classList.toggle('active');
}

seeMore[0].addEventListener('click', seeMoreClicked);








// =====================================carDotJs============================================

// var testEl = document.getElementsByTagName("h1");


// var para = document.createElement("h1");
// var node = document.createTextNode("I was Created haha!");
// para.appendChild(node);


// var element = document.getElementById("div1");
// element.appendChild(para);

// console.log(element);