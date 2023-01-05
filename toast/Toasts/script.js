let button = document.getElementById("button");
let toasts = document.getElementById("toasts");

const texts = [
  "Hi! I'm Vikas Kashyap",
  "I'm a Web Developer",
  "I love coding",
  "I want to enhance my coding knowledge at very high level",
  "I am a guy with Simple living high Thinking",
];

const types = ["info", "error", "success"];

button.addEventListener("click", () => createToast());

function createToast(text = null, type = null) {
  const notification = document.createElement("div");
  notification.classList.add("toast");

  notification.classList.add(type ? type : getRandomType());

  notification.innerText = text ? text : getRandomText();

  toasts.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 4000);
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

function getRandomText() {
  return texts[Math.floor(Math.random() * texts.length)];
}
