const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', event => {
		inputValue = event.currentTarget.value;
		trimed = inputValue.trim();
		if (trimed) {
			outputText.textContent = trimed;
		} else {
			outputText.textContent = "Anonymous";
		}
	}
);

