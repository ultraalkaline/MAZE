var canvas;
var framerate = 120;

var drops = new Array(100);

var rainStopped = true;

function setup() {
   canvas = createCanvas(windowWidth, windowHeight);
   canvas.position(0, 0);
   frameRate(framerate);

   initRain();
}

function draw() {
   background(18);

   if (!rainStopped) {
       for (var i = 0; i < drops.length; i++) {
          drops[i].fall();
          drops[i].show();
       }
   }
}

function toggleRain() {
    if (rainStopped) {
        // Start rain
        $("canvas").fadeIn(200);
        $("#logo").css("background-image", "url(img/maze_logo_green.png)");
        rainStopped = false;
    } else {
        $("canvas").fadeOut(200);
        $("#logo").css("background-image", "url(img/maze_logo.png)");
        setTimeout(function() {
            // Stop rain
            for (var i = 0; i < drops.length; i++) {
                drops[i].stop(true);
            }
            initRain();
            rainStopped = true;
        }, 500);

    }
}

function initRain() {
    for (var i = 0; i < drops.length; i++) {
       drops[i] = new Drop();
    }
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
   canvas.position(0, 0);
}
