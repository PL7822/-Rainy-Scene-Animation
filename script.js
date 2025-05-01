function createDrop() {
    const drop = document.createElement("div");
    drop.className = "drop";
    drop.style.left = Math.random() * window.innerWidth + "px";
    document.querySelector(".rain").appendChild(drop);
    setTimeout(() => drop.remove(), 1000);
  }
  
  setInterval(createDrop, 50);
  
  const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let rainDrops = [];

for (let i = 0; i < 500; i++) {
  rainDrops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 4 + 4,
    opacity: Math.random() * 0.5 + 0.3
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(174,194,224,0.5)";
  ctx.lineWidth = 1;
  ctx.lineCap = "round";

  for (let i = 0; i < rainDrops.length; i++) {
    const r = rainDrops[i];
    ctx.beginPath();
    ctx.moveTo(r.x, r.y);
    ctx.lineTo(r.x, r.y + r.length);
    ctx.stroke();
    r.y += r.speed;

    if (r.y > canvas.height) {
      r.y = -r.length;
      r.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(drawRain);
}

drawRain();
