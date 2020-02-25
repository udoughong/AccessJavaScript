function myAlert() {
    alert("Welcome to UDOUGHONG BLOG!");
}
function myWelcome(target) {
    document.getElementById(target).innerText = "Hello JavaScript!";
}
function myFunction(target ,input) {
    var a = document.getElementById(input).value;
    document.getElementById(target).innerText = a * a;
}