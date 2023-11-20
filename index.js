const fixedButton = document.querySelector(".fixed-btn");
const moveButton = document.querySelector(".move-btn");
const space = document.querySelector(".space");
const button1 = document.querySelector(".fixed-btn");
const text = document.querySelector(".textt");

// Posiciona o botão "Não" ao lado do botão "Sim" com um espaço inicial entre eles
const initialSpace = 50; // Espaço inicial entre os botões
moveButton.style.left = `${
  fixedButton.offsetLeft + fixedButton.clientWidth + initialSpace
}px`;
moveButton.style.top = `${fixedButton.offsetTop}px`;

moveButton.addEventListener("click", () => {
  const spaceRect = space.getBoundingClientRect(); // Obtém as dimensões e posição da div "space"
  const spaceLeft = spaceRect.left;
  const spaceTop = spaceRect.top;
  const spaceWidth = spaceRect.width;
  const spaceHeight = spaceRect.height;

  const buttonWidth = moveButton.clientWidth;
  const buttonHeight = moveButton.clientHeight;

  const maxX = spaceWidth - buttonWidth;
  const maxY = spaceHeight - buttonHeight;

  let randomX, randomY;

  do {
    randomX = Math.floor(Math.random() * maxX);
    randomY = Math.floor(Math.random() * maxY);
  } while (
    randomX >= fixedButton.offsetLeft &&
    randomX <= fixedButton.offsetLeft + fixedButton.clientWidth &&
    randomY >= fixedButton.offsetTop &&
    randomY <= fixedButton.offsetTop + fixedButton.clientHeight
  );

  moveButton.style.left = `${spaceLeft + randomX}px`;
  moveButton.style.top = `${spaceTop + randomY}px`;
});

button1.addEventListener("click", () => {
  text.innerHTML = "Marcado para amanhã então &#128527;";
});
