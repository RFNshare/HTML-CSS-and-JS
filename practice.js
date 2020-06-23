
function changeColors() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.className = "bluBack";
    div2.className = "orangeBack";
}
function changeNames() {
    var div1 = prompt("Enter DIV 1 name");
    document.getElementById('div1').innerHTML = div1;
    var div2 = prompt("Enter DIV 2 name");
    document.getElementById('div2').innerHTML = div2;

}
function upload() {
    var imgcan = document.getElementById('d1');
    var fileinput = document.getElementById('finput');
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcan);
}
function changeColor() {
    var clr = document.getElementById('clr');
    var colorField = document.getElementById('d1');
    d1.style.backgroundColor = clr.value;

}
function doThing() {
    var sliderinput = document.getElementById("sldr");
    var size = sliderinput.value;
}
function doLime() {
    var p = document.getElementById("d1");
    p.style.backgroundColor = "lime";
}
function  doYellow() {
    var q = document.getElementById("d1");
    d1.style.backgroundColor = "white";
    var ctx = q.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,40,40);
    ctx.fillRect(60,10,40,40);
    ctx.fillStyle = "black";
    ctx.font = "40px Arial"
    ctx.fillText("Hello",10,80);
}
function doNone() {
    var r = document.getElementById("d1");
    r.style.backgroundColor = "white";
    var ctx = r.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(10,10,500,500);


}