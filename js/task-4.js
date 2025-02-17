const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
		event.preventDefault();
	
		const emailValue = event.target.elements.email.value;
		const passwordValue = event.target.elements.password.value;

		if (emailValue === "" || passwordValue === "") {
			alert("All form fields must be filled in!");
		} else {
			const userData = {};
			userData[event.target.elements.email.name] = emailValue;
			userData[event.target.elements.password.name] = passwordValue;
			console.log(userData);
			loginForm.reset();
		}
	}
);




