// Find the dark mode button
const themeButton = document.getElementById("themeButton");

// Use the saved mode when the page opens
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeButton.textContent = "Light mode";
}

// Switch modes and remember the choice
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
