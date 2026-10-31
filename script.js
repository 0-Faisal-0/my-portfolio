const themeButton = document.getElementById("themeButton");

// Use the saved choice when the page opens
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeButton.textContent = "Light mode";
}

// Switch modes and save the choice
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeButton.textContent = "Light mode";
  } else {
    localStorage.setItem("theme", "light");
    themeButton.textContent = "Dark mode";
  }
});