function myAlert() {
    alert("Welcome to UDOUGHONG BLOG!");
}
function myWelcome(target) {
    document.getElementById(target).innerText = "Hello JavaScript!";
}
function myFunction(target ,myInput) {
    var a = document.getElementById(myInput).value;
    document.getElementById(target).innerText = a * a;
}