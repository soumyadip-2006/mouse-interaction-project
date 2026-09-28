const cursor = document.getElementById("cursor");

let mouseX = 0, mouseY = 0;   
let curX = 0, curY = 0;      


window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});


function animate() {

    curX += (mouseX - curX) * 0.1;
    curY += (mouseY - curY) * 0.1;

    cursor.style.left = curX + "px";
    cursor.style.top  = curY + "px";

    requestAnimationFrame(animate);
}

animate();


