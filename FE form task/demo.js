
form.addEventListener("submit", validate);function validate(event) {
    var age = document.getElementById("age-input").value;
    if(age < 18) {
      document.getElementById("error").innerHTML = "underaged";
      event.preventDefault(underaged);
    }
}
var form = document.getElementById("my-form");

  