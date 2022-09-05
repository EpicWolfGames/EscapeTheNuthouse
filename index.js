function NewGameStart() {
  const element = document.getElementById("testplay");
  element.innerHTML = "newgametesting";
  setTimeout(function() {
    element.innerHTML = "";
  }, 5000);
}
function LoadGameStart() {
  const element = document.getElementById("testplay");
  element.innerHTML = "loadtesting";
  setTimeout(function() {
    element.innerHTML = "";
  }, 5000);
}
function CreditsStart() {
  setTimeout(function() {
  document.body.innerHTML = "";
  }, 500);
}
