console.log("script loaded");
function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");

    if (recommendation.value.trim() !== "") {

        // Add the recommendation to the page
        let element = document.createElement("div");
        element.className = "recommendation";
        element.innerHTML = '"'  + recommendation.value + '"';

        document.getElementById("all_recommendations").appendChild(element);

        // Clear the textbox
        recommendation.value = "";

        // Show popup ONLY after successful submission
        showPopup(true);
    }
}

function showPopup(show) {
    const popup = document.getElementById("popup");
     if (show) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}