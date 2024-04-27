function changeName() {
    var newName = "Aldo Biondo";
    document.getElementById("name").textContent = newName;
}

function changeImage() {
    var newImageSrc = "https://rb.gy/d7seal";
    document.getElementById("profile-pic").src = newImageSrc;
}

function cloneCard() {
    var container = document.getElementById("container");
    var clone = container.firstElementChild.cloneNode(true); // clone of the card
    container.appendChild(clone); // .append (?) the clone to the container

    // modify IDs of elements within the cloned card to ensure uniqueness (?)
    clone.querySelectorAll("[id]").forEach(function(element) {
        element.id += "_clone";
    });
}
