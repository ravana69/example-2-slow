let CANVAS = document.getElementById('noisy-canvas'),
CTX = CANVAS.getContext('2d');


main();


function main() {
  window.addEventListener('resize', updateCanvasSize);
  updateCanvasSize();
  render();
}


function getRandom() {
  return Math.random() * 255;
}


function render() {
  let imageData = CTX.createImageData(CTX.canvas.width, CTX.canvas.height);

  for (let i = 0; i < imageData.data.length; i += 4) {
    const color = getRandom();
    imageData.data[i] = color;
    imageData.data[i + 1] = color;
    imageData.data[i + 2] = color;
    imageData.data[i + 3] = 255;
  }

  CTX.putImageData(imageData, 0, 0);

  requestAnimationFrame(render);
}


function updateCanvasSize() {
  CTX.canvas.height = window.innerHeight;
  CTX.canvas.width = window.innerWidth;
}