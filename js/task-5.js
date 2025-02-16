function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const coloriseButton = document.querySelector('.change-color');
const colorView = document.querySelector('.color');
const styleForBody = document.querySelector('body');

coloriseButton.addEventListener('click', event => {
		const styleColor = getRandomHexColor();
		styleForBody.style.backgroundColor = styleColor;
		colorView.textContent = styleColor;
	}
);

