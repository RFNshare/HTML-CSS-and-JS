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

var imgOne = null;
var imgTwo = null;
var imgOneCanvas;
var imgTwoCanvas;

function imgOneUpload() {
    imgOneCanvas = document.getElementById('d1');
    var file = document.getElementById('imgOneInput');
    imgOne = new SimpleImage(file);
    imgOne.drawTo(imgOneCanvas);
}

function imgTwoUpload() {
    imgTwoCanvas = document.getElementById('d2');
    var file = document.getElementById('imgTwoInput');
    imgTwo = new SimpleImage(file);
    imgTwo.drawTo(imgTwoCanvas);
}

function createComposite() {
    // this function creates a new image with the dimensions of the foreground image and returns the composite green screen image
    var output = new SimpleImage(imgOne.getWidth(), imgOne.getHeight());
    var greenThreshold = 240;
    for (var pixel of imgOne.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > greenThreshold) {
            //pixel is green, use background
            var bgPixel = imgTwo.getPixel(x, y);
            output.setPixel(x, y, bgPixel);
        } else {
            //pixel is not green, use foreground
            output.setPixel(x, y, pixel);
        }
    }
    return output;
}

function greenScreen() {
    if (imgOne == null || !imgOne.complete()) {
        alert("First Image not Loaded");
        return;
    }
    if (imgTwo == null || !imgTwo.complete()) {
        alert("Second Image not Loaded");
    }
    clearCanvas();
    // call createComposite, which does green screen algorithm and returns a composite image
    var finalImage = createComposite();
    finalImage.drawTo(imgOneCanvas);

}

function clearCanvas() {
    doClear(imgOneCanvas);
    doClear(imgTwoCanvas);
}

function doClear(canvas) {
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function upload() {
    var imgcan = document.getElementById('d1');
    var fileinput = document.getElementById('finput');
    image = new SimpleImage(fileinput);
    image.drawTo(imgcan);
}

function doGrey() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgcan = document.getElementById("d1");
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

function doYellow() {
    var q = document.getElementById("d1");
    d1.style.backgroundColor = "white";
    var ctx = q.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(10, 10, 40, 40);
    ctx.fillRect(60, 10, 40, 40);
    ctx.fillStyle = "black";
    ctx.font = "40px Arial"
    ctx.fillText("Hello", 10, 80);
}

function doNone() {
    var r = document.getElementById("d1");
    r.style.backgroundColor = "white";
    var ctx = r.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(10, 10, 500, 500);
}