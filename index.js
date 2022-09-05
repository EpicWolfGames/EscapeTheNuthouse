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
  document.body.innerHTML = "
  <h1>Coming soon...</h1>
  <style>
    h1 {
      font-family: "press Start 2P";
      position: absolute;
      top: 50%;
      left: 50%;
    }
  </style>
  ";
}
