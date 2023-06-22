//random hatter
window.onload = choosePic;

var kepk = new Array('img/bg/1.jpg','img/bg/2.jpg','img/bg/3.png','img/bg/4.jpg','img/bg/5.jpg','img/bg/6.jpg','img/bg/7.jpg','img/bg/8.jpg','img/bg/9.jpg');

function choosePic() {
	//random szám
    var random = Math.floor(Math.random() * kepk.length);
    document.body.style.backgroundImage = "url(" + kepk[random] + ")";
}