// canvas setting
let canvas;
let ctx;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 700;

document.body.appendChild(canvas);

let backgroundImage, spaceshipImage, bulletImage, aliensImage, gameOverImage;
let gameOver = false; // true이면 게임 끝남
let score = 0;

// 우주선 좌표
let spaceshipX = canvas.width / 2 - 30;
let spaceshipY = canvas.height - 60;

let bulletList = []; // 총알 넣는 리스트

function Bullet() {
  this.x = 0;
  this.y = 0;
  this.init = () => {
    this.x = spaceshipX + 18;
    this.y = spaceshipY;
    this.alive = true;

    bulletList.push(this);
  };
  this.update = () => {
    this.y -= 7;
  };
  this.checkHit = () => {
    for (let i = 0; i < aliensList.length; i++) {
      if (
        this.y <= aliensList[i].y &&
        this.x >= aliensList[i].x &&
        this.x <= aliensList[i].x + 50
      ) {
        score += 100;
        this.alive = false;
        aliensList.splice(i, 1);
      }
    }
  };
}

function generateRandomValue(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

let aliensList = [];
function Aliens() {
  this.x = 0;
  this.y = 0;
  this.init = () => {
    this.y = 0;
    this.x = generateRandomValue(0, 350);
    aliensList.push(this);
  };
  this.update = () => {
    this.y += 2;

    if (this.y >= 650) {
      gameOver = true;
    }
  };
}

function loadImage() {
  backgroundImage = new Image();
  backgroundImage.src = "images/background.png";

  spaceshipImage = new Image();
  spaceshipImage.src = "images/spaceship.png";

  bulletImage = new Image();
  bulletImage.src = "images/bullet.png";

  aliensImage = new Image();
  aliensImage.src = "images/aliens.png";

  gameOverImage = new Image();
  gameOverImage.src = "images/gameOver.jpg";
}

let keysDown = {};
function setupKeyboardLister() {
  document.addEventListener("keydown", (event) => {
    keysDown[event.key] = true;
  });
  document.addEventListener("keyup", (event) => {
    delete keysDown[event.key];

    if (event.key === " ") {
      createBullet();
    }
  });
}

function createBullet() {
  let b = new Bullet();
  b.init();
}

function createAliens() {
  const interval = setInterval(() => {
    let a = new Aliens();
    a.init();
  }, 1000);
}

// key 누르면 이벤트 일어남!!
function update() {
  if ("ArrowRight" in keysDown) {
    spaceshipX += 5;
  } else if ("ArrowLeft" in keysDown) {
    spaceshipX -= 5;
  }
  if (spaceshipX <= 0) {
    spaceshipX = 0;
  } else if (spaceshipX >= 340) {
    spaceshipX = 340;
  }
  // 총알의 y좌표 업데이트하는 함수 호출
  for (let i = 0; i < bulletList.length; i++) {
    if (bulletList[i].alive) {
      bulletList[i].update();
      bulletList[i].checkHit();
    }
  }
  for (let i = 0; i < aliensList.length; i++) {
    aliensList[i].update();
  }
}

function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
  ctx.fillText(`Score : ${score}`, 20, 20);
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  for (let i = 0; i < bulletList.length; i++) {
    if (bulletList[i].alive) {
      ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y);
    }
  }
  for (let i = 0; i < aliensList.length; i++) {
    ctx.drawImage(aliensImage, aliensList[i].x, aliensList[i].y);
  }
  if (gameOver) {
    ctx.drawImage(gameOverImage, 0, 100, 400, 400);
  }
}

function main() {
  if (!gameOver) {
    update();
    render();
    requestAnimationFrame(main);
  }
}

loadImage();
setupKeyboardLister();
createAliens();
main();

// 총알 만들기
// 스페이스바를 누르면 총알 발사
// 총알을 발사 = 총알의 y값 -- 총알의 x값은? 스페이스를 누른 순간 우주선의 좌푯값
// 발사된 총알은 배열에 저장을 한다
// 총알들의 x, y표 값을 있어야 한다.
// 이 총알 배열을 가지고 render를 한다.
