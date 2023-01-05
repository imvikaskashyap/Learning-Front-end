let textElement = document.getElementById("text");

let speedElement = document.getElementById("speed");

let index = 1;
let time = 100 / speedElement.value;

let someText = "Hi! it's Vikas Kashyap here";

speedElement.addEventListener("change", (e) => {
  time = 300 / e.target.value;
});

function automaticText() {
  textElement.innerText = someText.slice(0, index);

  index++;
  if (index > someText.length) {
    index = 1;
  }

  setTimeout(automaticText, time);
}

automaticText();
