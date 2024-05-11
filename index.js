const bttnDrum = document.querySelectorAll(".drum");

const makeNoise = (condition) => {
  switch (condition) {
    case "w":
      const tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      const kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    default:
      break;
  }
};

const handleClick = (e) => {
  const listValue = e.target.innerHTML;
  makeNoise(listValue);
  bttnAnimation(listValue);
};

const keyPress = (e) => {
  const keyCode = e.key;
  makeNoise(keyCode);
  bttnAnimation(keyCode);
};

const bttnAnimation = (currentKey) => {
  let activeBttn = document.querySelector(`.${currentKey}`);
  if (activeBttn !== null) {
    activeBttn.classList.add("pressed");
    setTimeout(() => activeBttn.classList.remove("pressed"), 100);
  }
};

Array.from(bttnDrum).map((bttn) => bttn.addEventListener("click", handleClick));

document.addEventListener("keydown", keyPress);
