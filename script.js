function snow() {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    flake.innerHTML = "❄";
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.fontSize = Math.random() * 20 + 10 + "px";
    flake.style.animationDuration = Math.random() * 3 + 4 + "s";
    document.body.appendChild(flake);

    setTimeout(() => flake.remove(), 7000);
}
setInterval(snow, 200);

const btn = document.getElementById("startBtn");
const music = document.getElementById("music");
const finalMsg = document.getElementById("finalMsg");

btn.addEventListener("click", () => {
    music.play();
    finalMsg.style.display = "block";
    btn.innerText = "🎄 Joyeux Noël 🎄";
    btn.disabled = true;
});

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;

    for (let i = 0; i < 50; i++) {
        particles.push({
            x, y,
            dx: Math.random() * 6 - 3,
            dy: Math.random() * 6 - 3,
            life: 100
        });
    }
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.life--;

        ctx.fillStyle = "rgba(255,200,0,0.8)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
    });

    requestAnimationFrame(animateFireworks);
}

setInterval(createFirework, 1200);
animateFireworks();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});