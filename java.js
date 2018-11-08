function sayConsole() {
  console.log ("Hello, World!");
  alert ("Check the console! :D")
}

function sayPopup() {
  alert ("Hello, World!");
}

function sayStranger(){
  let name = prompt ("What is your name?");
  alert("Hello, " + name + "!");
}

function sayBrowser() {
  var p = document.getElementById("browser");
  p.innerHTML = p.innerHTML + "Hello, World! </br>";
}
