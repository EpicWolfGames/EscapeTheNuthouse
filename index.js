// when the new game button is pressed
function NewGameStart() {
  setTimemout(function() {
    document.getElementById("DivTitleScreenID").innerHTML = "";
    document.body.style.background = "black";
    document.getElementById("LoadingScreen").innerHTML = "<h1>Loading...</h1>";
  }, 500);
}
// when the load game button is pressed
function LoadGameStart() {
  document.getElementById("DivTitleScreenID").innerHTML = "";
  document.getElementById("CreditsCenterID").innerHTML = "<h1>Coming soon...</h1>";
}
// when the credits button is pressed
function CreditsStart() {
  document.getElementById("DivTitleScreenID").innerHTML = "";
  document.getElementById("CreditsCenterID").innerHTML = "<h1>Coming soon...</h1>";
}
