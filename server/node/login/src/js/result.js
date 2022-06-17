window.onload = function () {
    let canvas = document.getElementById("canv");
    let context = canvas.getContext("2d");

    context.font = "30px sans";
    context.fillStyle = "white";
    context.textAlign = "center";

    let string = "${이름}의 오늘의 만찬은";

    let angle = Math.PI * 0.65;
    let radius = 200;

    context.translate(180, 280);
    context.rotate(-1.1 * angle / 2);

    for (let i = 0; i < string.length; i++) {

        context.rotate(angle / string.length);
        context.save();
        context.translate(0, -1 * radius);
        context.fillText(string[i], 0, 0);
        context.restore();
    }
};