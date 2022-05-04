const navBar = document.querySelectorAll(".icon-nav-bar");

navBar.forEach((element) => {
  element.addEventListener("click", () => {
    navBar.forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.add("active");
  });
});

//
const inputContactArea = document.querySelectorAll(
  "#input-area input, #input-area textarea"
);
const labelsContactArea = document.querySelectorAll("#input-area label");

inputContactArea.forEach((input) => {
  input.addEventListener("focus", (event) => {
    if (event.target.value === "") {
      event.target.parentNode.classList.toggle("input-active-label");
    }
  });

  input.addEventListener("blur", (event) => {
    if (event.target.value === "") {
      event.target.parentNode.classList.toggle("input-active-label");
    }
  });
});
