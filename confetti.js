
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let pieces = [];
let width = 0;
let height = 0;
let dpr = Math.min(window.devicePixelRatio || 1, 2);

function resize(){
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function makePiece(){
  const palette = ["#ec3d78", "#ff6b9d", "#ffffff", "#d81b60", "#f8cad9"];
  return {
    x: Math.random() * width,
    y: -20 - Math.random() * height * 0.45,
    w: 7 + Math.random() * 8,
    h: 12 + Math.random() * 10,
    color: palette[Math.floor(Math.random() * palette.length)],
    speed: 2 + Math.random() * 3,
    drift: -1 + Math.random() * 2,
    rotation: Math.random() * Math.PI,
    spin: -0.08 + Math.random() * 0.16
  };
}

function resetPieces(){
  pieces = Array.from({length: 80}, makePiece);
}

function animate(){
  ctx.clearRect(0, 0, width, height);

  for(const p of pieces){
    p.y += p.speed;
    p.x += p.drift;
    p.rotation += p.spin;

    if(p.y > height + 30){
      Object.assign(p, makePiece(), { y: -30 });
    }

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
    ctx.restore();
  }

  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  resize();
});

resize();
resetPieces();
animate();
