const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
		event.preventDefault();
	
		emailValue = event.target.elements.email.value;
		passwordValue = event.target.elements.password.value;

		if (emailValue === "" || passwordValue === "") {
			console.log("All form fields must be filled in!");
		} else {
			const userData = {};
			userData[event.target.elements.email.name] = emailValue;
			userData[event.target.elements.password.name] = passwordValue;
			console.log(userData);
		}
		
		loginForm.reset();
	}
);

