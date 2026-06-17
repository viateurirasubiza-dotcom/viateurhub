console.log("Site Loaded");

window.onload = function () {
    alert("Murakaza neza!");
};

function searchLesson() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    if (input.includes("p1") || input.includes("math") || input.includes("english") || input.includes("kinyarwanda")) {
        window.location.href = "classes/p1.html";
    } else {
        alert("Nta somo ribonetse");
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
