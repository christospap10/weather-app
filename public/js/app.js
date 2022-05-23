console.log("Client side javascript file is loaded!");

// Fetch the Weather data for Boston
fetch("http://localhost:3000/weather?address=thessaloniki").then(function (
  response
) {
  if (!response.ok) {
    throw new Error(response.message);
  }
  return response.json().then((data) => {
    console.log(data);
  });
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          return Promise.reject(data.error);
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent =
            data.forecast.place + ": " + data.forecast.forecast;
        }
      });
    }
  );
});
