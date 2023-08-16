//random hatter
window.onload = choosePic;

var kepk = new Array('./img/5.jpg','./img/about.jpg','./img/1.jpg');

function choosePic() {
	//random szám
    var random = Math.floor(Math.random() * kepk.length);
    document.body.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), url(" + kepk[random] + ")";
}