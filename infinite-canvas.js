var infiniteCanvas = document.getElementById("infiniteCanvas");
var context = infiniteCanvas.getContext("2d");
var drawingCurrently = false;

function draw(e) {
    // Ignoring movement without mouse action
    if (!drawingCurrently) {
        return
    }

    context.beginPath();
    context.arc(e['clientX'], e['clientY'], 1, 0, 100);
    context.stroke();
};

window.onload = function() {

    infiniteCanvas.addEventListener('mousedown', function(e) {
        drawingCurrently = true;
        draw(e);
    });
    infiniteCanvas.addEventListener('mouseup', function(e) {
        drawingCurrently = false;
        draw(e);
    });
    infiniteCanvas.addEventListener('mousemove', function(e) {
        draw(e);
    });

    console.log(document.body.scrollHeight)
    console.log(document.body.scrollWidth)
};
