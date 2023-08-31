const charset = "0123456789abcdef";

const color = document.querySelector(".js-color-name");
const image = document.querySelector(".js-image-container");

hexColor = "#";

document.querySelector(".js-button").addEventListener("click", () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += charset.charAt(randomNumber());
  }
  document.querySelector(".js-main").style.backgroundColor = hex;
  color.textContent = hex;
  color.style.color = hex;
  hexColor = hex;

  image.innerHTML = '<img src="./copy-icon.svg">';
  image.title = "copy the hex code";
});

image.addEventListener("click", async () => {
  image.innerHTML = '<img src="./checkmark-icon.svg">';

  image.title = "copied";

  try {
    await navigator.clipboard.writeText(
      hexColor === "#" ? "#000000" : hexColor
    );
  } catch (err) {
    console.log(err);
  }
});

function randomNumber() {
  return Math.floor(Math.random() * charset.length);
}
