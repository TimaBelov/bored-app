const body = document.querySelector(".body");
const btn = document.querySelector(".js-btn");
const outputText = document.querySelector(".js-output");
const title = document.querySelector(".js-title");

const SERVER_SUCCESS_RESPONSE_CLASS = "body-response";

btn.addEventListener("click", function () {
  fetch("https://www.boredapi.com/api/activity/")
    .then((response) => response.json())
    .then((data) => {
      outputText.innerHTML = data.activity;
      title.innerHTML = "Ура, теперь не скучно 🔥";
      body.classList.add(SERVER_SUCCESS_RESPONSE_CLASS);
    });
});
