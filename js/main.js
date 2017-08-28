function sayHello(name) {
    return "Hello " + (name || "anonymous person")
}

function setH1(string) {
    var h1 = document.querySelector('h1')
    h1.innerText = string

}

function showGreeting() {
    setH1(sayHello("Mihir"))
}
var button = document.querySelector('button')
button.addEventListener("mouseout", showGreeting)

button.addEventListener("click", function () {
    setH1(sayHello("Banana"))
})