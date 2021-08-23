function displayScore() {
    var listContent = document.createElement("li");
    var listEl = document.querySelector("ul");
    var highScore = JSON.parse(localStorage.getItem("Name").JSON.parse(localStorage.getItem("Score")));
    listContent.textContent = highScore;
    listEl.appendChild(listContent);



}