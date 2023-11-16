//random hatter
window.onload = choosePic;

var kepk = new Array('./img/index/1.jpeg','./img/index/2.jpeg','./img/index/3.jpeg','./img/index/4.jpeg','./img/index/5.jpeg','./img/index/6.jpeg','./img/index/7.jpeg','./img/index/8.jpeg','./img/index/9.jpeg');

function choosePic() {
	//random szám
    var random = Math.floor(Math.random() * kepk.length);
    document.body.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), url(" + kepk[random] + ")";
}