const form = document.querySelector("form");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordText = document.querySelector(".password-text");

form.addEventListener("submit", (e) => e.preventDefault());

passwordInput.addEventListener("blur", checkSamePassword);

confirmPasswordInput.addEventListener("blur", checkSamePassword);

function checkSamePassword() {
	if (!passwordInput.value && !confirmPasswordInput.value) {
		passwordText.textContent = "";
		return;
	}
	if (passwordInput.value === confirmPasswordInput.value) {
		passwordText.textContent = "Passwords Matches";
		passwordText.style.color = "green";
	} else {
		passwordText.textContent = "Passwords must matches";
		passwordText.style.color = "red";
	}
}
