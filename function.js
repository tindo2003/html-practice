

function docolor() {
    var dd1 = document.getElementById("can1")
    var colorinput = document.getElementById("clr")
    var color = colorinput.value;
    dd1.style.backgroundColor = color;
}

function changeBackgroundColor() {
    var dd1 = document.getElementById("body")
    var colorinput = document.getElementById("clr1")
    var color = colorinput.value;
    dd1.style.backgroundColor = color;
}


function dosquare() {
    const value = event.target.valueAsNumber;
    var dd1 = document.getElementById("can2")
    var sizeinput = document.getElementById("sldr")
    var size = sizeinput.value
    var ctx = dd1.getContext("2d")
    ctx.clearRect(0, 0, dd1.width, dd1.height)
    ctx.fillStyle = "pink"
    ctx.fillRect(10, 10, size, size)

}


function changeTitle() {
    var x = document.getElementById("hello")
    x.className = "title";
    x.innerHTML = "Welcome!";
}

var image = null;
var canvas = null;
var fileinput = null;


function uploadimage() {
    canvas = document.getElementById("can");
    fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    image.drawTo(canvas);
}

function clearCanvas() {
    canvas = document.getElementById("can");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    fileinput.value = null;
}

function greyscale() {
    canvas = document.getElementById("can");
    for (pixel of image.values()) {
        var avgpxl = pixel.getRed() + pixel.getGreen() + pixel.getBlue();
        pixel.setRed(avgpxl);
        pixel.setGreen(avgpxl);
        pixel.setBlue(avgpxl);
    }
    image.drawTo(canvas);
}

function redfilter() {
    canvas = document.getElementById("can");
    for (var pixel of image.values()) {
        var avgpxl = pixel.getRed() + pixel.getGreen() + pixel.getBlue();
        if (avgpxl < 128) {
            pixel.setRed(2 * avgpxl);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
        else {
            pixel.setRed(255);
            pixel.setGreen(2 * avgpxl - 255);
            pixel.setBlue(2 * avgpxl - 255);
        }
    }
    image.drawTo(canvas);
}

function rainbow() {
    canvas = document.getElementById("can");
    var w = image.getWidth();
    for (var pixel of image.values()) {
        if (pixel.getX() < w / 3) {
            pixel.setRed(255);
        }
        else {
            if (pixel.getX() < w * 2 / 3) {
                pixel.setGreen(255);
            }
            else {
                pixel.setBlue(255);
            }
        }
    }
    image.drawTo(canvas);
}

function removeFilter() {
    image = new SimpleImage(fileinput);
    image.drawTo(canvas);
}

