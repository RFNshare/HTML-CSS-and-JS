var img;
var imgCanvas;
var file;

function checkImageLoad() {
    if ((img == null) || !img.complete()) {
        return false;
    } else {
        return true;
    }
}

function imgUpload() {
    imgCanvas = document.getElementById('d1');
    file = document.getElementById('imgInput');
    img = new SimpleImage(file);
    img.drawTo(imgCanvas);
}

function doGrey() {
    if (checkImageLoad()) {
        drawGrey();
        img.drawTo(imgCanvas);
    } else {
        alert("Image not Loaded")
    }
}

function doRed() {
    if (checkImageLoad()) {
        drawRed();
        img.drawTo(imgCanvas);
    } else {
        alert("Image not Loaded");
    }
}
function doRainbow() {
    if (checkImageLoad()) {
        drawRainbow();
        img.drawTo(imgCanvas);
    } else {
        alert("Image not Loaded");
    }
}

function drawGrey() {
    for (var pixel of img.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    imgCanvas = document.getElementById("d1");
}

function drawRed() {
    for (var pixel of img.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (avg < 128) {
            pixel.setRed(avg * 2);
            pixel.setGreen(0);
            pixel.setBlue(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen(avg * 2 - 255);
            pixel.setBlue(avg * 2 - 255);
        }
    }
    imgCanvas = document.getElementById("d1");
}

function drawRainbow() {
        for (var pixel of img.values()) {
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(avg * 2);
                pixel.setGreen(0);
                pixel.setBlue(0);
            }
            else(avg>=128)
            {
                pixel.setRed(255);
                pixel.setGreen(avg * 2 - 255);
                pixel.setBlue(avg * 2 - 255);
            }
        }
        imgCanvas = document.getElementById("d1");
        img.drawTo(imgCanvas);

}

function clearCanvas() {
    doClear(imgCanvas);
}

function doClear(canvas) {
    file = document.getElementById('imgInput');
    img = new SimpleImage(file);
    img.drawTo(imgCanvas);
}