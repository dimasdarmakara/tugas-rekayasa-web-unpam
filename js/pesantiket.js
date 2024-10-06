// Validasi form dengan HTML5
document.getElementById("ticketForm").addEventListener("submit", function (event) {
  var form = this;

  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  form.classList.add("was-validated");
});
