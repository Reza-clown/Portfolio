const themeButton = document.getElementById("theme-button");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "light");
    }
});