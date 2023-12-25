let antiClockDegrees = 1;
let clockDegrees = 1;
let intialSize = 1

export function moveImageRight() {
  const movingImage = document.getElementById("cat-image");
  const currentPosition = parseInt(movingImage.style.marginLeft) || 0;
  movingImage.style.marginLeft = currentPosition + 20 + "px";
}

export function rotateLeft() {
  const movingImage = document.getElementById("cat-image");
  let updatedDegree = -15 * antiClockDegrees;
  movingImage.style.transform = `rotate(${updatedDegree}deg)`;
  antiClockDegrees++;
}

export function rotateRight() {
  const movingImage = document.getElementById("cat-image");
  let updatedDegree = 15 * clockDegrees;
  movingImage.style.transform = `rotate(${updatedDegree}deg)`;
  clockDegrees++;
}

export function increaseSize() {
    const movingImage = document.getElementById("cat-image");
    let updatedDegree = 0.3 * intialSize + 1;
    movingImage.style.scale = updatedDegree;
    intialSize++;
  }

  export function sayHello() {
    const movingImage = document.getElementById("say-hello");
    movingImage.style.display = 'block';
    setTimeout(()=>{
      movingImage.style.display = 'none';
    },2000)
  }

  export function thinkHmm() {
    const movingImage = document.getElementById("think");
    movingImage.style.display = 'block';
    setTimeout(()=>{
      movingImage.style.display = 'none';
    },2000)
  }
