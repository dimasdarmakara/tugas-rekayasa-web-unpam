// Validasi form HTML5 dengan JavaScript untuk konfirmasi password
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  var form = this;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (form.checkValidity() === false || password !== confirmPassword) {
    event.preventDefault();
    event.stopPropagation();

    if (password !== confirmPassword) {
      document.getElementById("confirmPassword").classList.add("is-invalid");
    }
  }

  form.classList.add("was-validated");
});
