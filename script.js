// Function to open the modal with the clicked image
function openModal(imgElement) {
    const modal = document.getElementById("photoModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = imgElement.src;
}

// Function to close the modal
function closeModal() {
    document.getElementById("photoModal").style.display = "none";
}

// Prevent modal from closing when clicking the image
document.getElementById("modalImage").addEventListener("click", function(event) {
    event.stopPropagation();
});

// Event listener to close modal when pressing the Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
