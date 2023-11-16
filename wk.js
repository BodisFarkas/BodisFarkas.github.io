//random hatter
window.onload = choosePic;

var kepk = new Array('../v2/img/index/1.jpeg','../v2/img/index/2.jpeg','../v2/img/index/3.jpeg','../v2/img/index/4.jpeg','../v2/img/index/5.jpeg','../v2/img/index/6.jpeg','../v2/img/index/7.jpeg','../v2/img/index/8.jpeg','../v2/img/index/9.jpeg');

function choosePic() {
	//random szám
    var random = Math.floor(Math.random() * kepk.length);
    document.body.style.backgroundImage = "url(" + kepk[random] + ")";
}