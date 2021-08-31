function displayScore() {
    var highScore = JSON.parse(localStorage.getItem("Score"));
    var userName = JSON.parse(localStorage.getItem("Name")); 
    var listSource = document.getElementById("scores");
    var listItems = document.createElement("li");
    listItems.setAttribute("class", "score-list");
    listSource.append(listItems);

    listItems.textContent = userName + " " + highScore + "/5"

}
displayScore();