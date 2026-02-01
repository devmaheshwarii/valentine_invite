// === Customize text here ===
const HER_NAME = "Hey Naina-ka-ky-kahna";
const YOUR_NAME = "Dev";
const QUESTION_LINE = "will you be my valentine?";
const SUBTITLE_LINE = "A tiny question from";
const SUCCESS_LINE = "Ok we’re locked in then! Can’t wait to see you :)";
const FOOTER_LINE = "See you soon QT";

const HINT_THRESHOLD = 7;

const questionText = document.getElementById("questionText");
const subtitleText = document.getElementById("subtitleText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const playArea = document.getElementById("playArea");
const hintText = document.getElementById("hintText");
const askScreen = document.getElementById("askScreen");
const yesScreen = document.getElementById("yesScreen");
const successLine = document.getElementById("successLine");
const footerNote = document.getElementById("footerNote");
const mePhoto = document.getElementById("mePhoto");

let dodgeCount = 0;

const buildQuestion = () => {
  questionText.textContent = `${HER_NAME}, ${QUESTION_LINE}`;
  subtitleText.textContent = `${SUBTITLE_LINE} ${YOUR_NAME}`;
  successLine.textContent = SUCCESS_LINE;
  footerNote.textContent = FOOTER_LINE;
};

const placeNoButton = () => {
  const areaRect = playArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const padding = 8;
  const maxLeft = areaRect.width - btnRect.width - padding;
  const maxTop = areaRect.height - btnRect.height - padding;

  const left = Math.max(
    padding,
    Math.floor(Math.random() * Math.max(maxLeft, padding)) + padding / 2
  );
  const top = Math.max(
    padding,
    Math.floor(Math.random() * Math.max(maxTop, padding)) + padding / 2
  );

  noBtn.style.left = `${left}px`;
  noBtn.style.top = `${top}px`;
};

const dodgeNo = () => {
  dodgeCount += 1;
  placeNoButton();
  if (dodgeCount >= HINT_THRESHOLD) {
    hintText.classList.add("show");
  }
};

const showYesScreen = () => {
  askScreen.classList.add("hidden");
  yesScreen.classList.remove("hidden");
};

const hideIfMissing = (img) => {
  img.addEventListener("error", () => {
    img.style.display = "none";
  });
};

yesBtn.addEventListener("click", showYesScreen);

["mouseenter", "touchstart", "click"].forEach((eventName) => {
  noBtn.addEventListener(eventName, (event) => {
    event.preventDefault();
    dodgeNo();
  });
});

window.addEventListener("resize", () => {
  placeNoButton();
});

buildQuestion();
hideIfMissing(mePhoto);
placeNoButton();
