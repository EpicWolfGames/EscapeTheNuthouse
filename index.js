// when the new game button is pressed
function NewGameStart() {
  setTimeout(function() {
    document.getElementById("DivTitleScreenID").innerHTML = "";
    document.body.style.background = "black";
    document.getElementById("LoadingScreen").innerHTML = "<h1>Loading...</h1>";
    setTimeout(function() {
      document.getElementById("LoadingScreen").innerHTML = "";
      document.body.style.background = "cyan";
      document.getElementById("TheGame").innerHTML = "<div class='grass'></div><div id='char'></div>";
    }, 3000);
  }, 500);
}
// when the load game button is pressed
function LoadGameStart() {
  setTimeout(function() {
  document.getElementById("DivTitleScreenID").innerHTML = "";
  document.getElementById("CreditsCenterID").innerHTML = "<h1>Coming soon...</h1> <input onclick='BackToTitleScreen();' type='button' value='BACK'>";
  }, 500);
}
// when the credits button is pressed
function CreditsStart() {
  setTimeout(function() {
  document.getElementById("DivTitleScreenID").innerHTML = "";
  document.getElementById("CreditsCenterID").innerHTML = "<h1>ESCAPE THE NUTHOUSE</h1> <h1>A Game by Epic Wolf Games</h1> <h1>Created by EpicJohn</h1> <h1>Co-Created by MegaWolf</h1> <h1>Programmed by MegaWolf</h1> <h1>Original Art by EpicJohn</h1> <h1>Menu Art by MegaWolf</h1> <input onclick='BackToTitleScreen();' type='button' value='BACK'>";
  }, 500);
}
function InfoStart() {
  setTimeout(function() {
  document.getElementById("DivTitleScreenID").innerHTML = "";
  document.getElementById("CreditsCenterID").innerHTML = "<h1>ESCAPE THE NUTHOUSE</h1> <br> <h1>Current Version: Pre-Alpha</h1> <h1>Programmed entirely within JavaScript, HTML, and CSS.</h1> <input onclick='BackToTitleScreen();' type='button' value='BACK'>";
  }, 500);
}
// takes you back to title screen
function BackToTitleScreen() {
  setTimeout(function() {
  document.getElementById("CreditsCenterID").innerHTML = "";
  document.getElementById("DivTitleScreenID").innerHTML = "<h1>ESCAPE THE NUTHOUSE!</h1><br><input onclick='NewGameStart();' type='button' value='NEW GAME'><br><br><input onclick='LoadGameStart();' type='button' value='LOAD GAME'><br><br><input onclick='CreditsStart();' type='button' value='CREDITS'><div class='MenuChar'><div class='MenuPixels'></div></div><h5 id='EWGProductions'>AN EPICWOLF GAMES PRODUCTION</h5><br><br><input onclick='InfoStart();' type='button' value='INFORMATION'>";
  }, 500);
}
function checkCollision(elm1, elm2) {
  var elm1Rect = elm1.getBoundingClientRect();
  var elm2Rect = elm2.getBoundingClientRect();
  return (elm1Rect.right >= elm2Rect.left &&
      elm1Rect.left <= elm2Rect.right) &&
    (elm1Rect.bottom >= elm2Rect.top &&
      elm1Rect.top <= elm2Rect.bottom);
}
var char = document.getElementById('char');
var grass = document.getElementById('grass');
var gravity = 1;
while (true) {
  if (checkCollision(char, grass)) {
    gravity = 0;
  } else {
    gravity = 1;
  }
  if (gravity == 1) {
    char.style.top = `${char.style.top+-1}px`;
  }
}

// placeholder code please remember. 
// document.getElementById("LevelsJS").innerHTML = "<script src='Levels/levels.js'></script>";
// document.getElementById("LevelsCSS").innerHTML = "<link rel='stylesheet' href='Levels/levels.css'>";
// document.getElementById("CutscenesJS").innerHTML = "<script src='Cutscenes/cutscenes.js'></script>";
// document.getElementById("CutscenesCSS").innerHTML = "<link rel='stylesheet' href='Cutscenes/cutscenes.css'>";
// these lines of code are used in start game
