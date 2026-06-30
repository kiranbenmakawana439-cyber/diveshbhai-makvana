// Search Subjects
function searchSubject() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();

        if (text.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Save Favourite Subject
function saveFavourite(subject) {
    localStorage.setItem("favouriteSubject", subject);
    alert(subject + " added to favourites!");
}

// Show Favourite Subject
window.addEventListener("load", function () {
    let fav = localStorage.getItem("favouriteSubject");
    if (document.getElementById("favSubject")) {
        document.getElementById("favSubject").innerHTML =
            fav || "No favourite subject selected.";
    }
});
