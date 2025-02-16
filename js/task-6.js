function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyStyle = document.querySelector('body');
bodyStyle.classList.add('container');

const inputNumber = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const collection = document.querySelector('#boxes');

let inputValue = '';

inputNumber.addEventListener('input', event => {
		inputValue = event.currentTarget.value;
	}
);

createButton.addEventListener('click', event => {
		collection.innerHTML = '';
		if ( inputValue >= 1 && inputValue <= 100) {
			createBoxes(inputValue);
		} else {
			inputNumber.value = '';
		}
	}
);

function createBoxes(amount) {
			const boxes = [];
			for (let i = 0; i < amount; i++) {
				boxes.push(`<div style="color: red; font-size: 16px; width: ${30 + 10 * i}px; height: ${30 + 10 * i}px; background-color: ${getRandomHexColor()}; "></div>`);
			}
			let gallery = [];
			gallery = boxes.join('');
			inputNumber.value = '';
			collection.insertAdjacentHTML("beforeend", gallery);
}

function destroyBoxes() {
	collection.innerHTML = '';
	inputValue = '';
	return;
}

destroyButton.addEventListener('click', destroyBoxes);

