// Ensure JavaScript runs after page is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Function to open the modal with the clicked image
    function openModal(imgElement) {
        const modal = document.getElementById("photoModal");
        const modalImage = document.getElementById("modalImage");
        modal.style.display = "flex"; // Shows the modal only when an image is clicked
        modalImage.src = imgElement.src;
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById("photoModal").style.display = "none";
    }

    // Prevent modal from closing when clicking the image itself
    const modalImage = document.getElementById("modalImage");
    if (modalImage) {
        modalImage.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    }

    // Event listener to close modal when pressing the Escape key
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    // Make sure modal is hidden on page load
    document.getElementById("photoModal").style.display = "none";

    // Attach openModal to all images dynamically
    document.querySelectorAll(".photo img").forEach(img => {
        img.addEventListener("click", function() {
            openModal(this);
        });
    });

});
