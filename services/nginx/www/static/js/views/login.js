// static/js/views/login.js

export function renderLogin() {
	fetch('static/html/login.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById("main-content").innerHTML = data;
		})
}

export function initLogin() {
	console.log("Login cargado");
	const loginForm = document.getElementById("login-form");
	const loginResponseMessage = document.getElementById("login-response-message");

	loginForm.addEventListener("submit", async (event) => {
		event.preventDefault();

		const username = document.getElementById("login-username").value;
		const password = document.getElementById("login-password").value;

		const response = await fetch("/api/usr/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});

		const data = await response.json();

		if (data.success) {
			console.log("Inicio de sesión ok");
			loginResponseMessage.innerText = "Inicio de sesión exitoswo";
			location.hash = '/game';

		} else {
			console.log("Error al iniciar sesión");
			loginResponseMessage.innerText = data.message;
		}
	});


}