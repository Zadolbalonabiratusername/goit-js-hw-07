const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', event => {
		const inputValue = event.currentTarget.value;
		const trimed = inputValue.trim();
		if (trimed) {
			outputText.textContent = trimed;
		} else {
			outputText.textContent = "Anonymous";
		}
	}
);

