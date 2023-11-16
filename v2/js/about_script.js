//random hatter
window.onload = choosePic;

var kepk = new Array('./img/about/1.jpeg','./img/about/2.jpeg','./img/about/3.jpeg');

function choosePic() {
	//random szám
    var random = Math.floor(Math.random() * kepk.length);
    document.body.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), url(" + kepk[random] + ")";
}