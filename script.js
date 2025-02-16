// Ensure JavaScript runs after page is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // open modal when image is clicked
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

    // Ensure clicking outside the image closes the modal
    document.getElementById("photoModal").addEventListener("click", function(event) {
        if (event.target === this) { // Ensures it only closes if clicking outside the image
            closeModal();
        }
    });

    // Prevent modal from closing when clicking the image itself
    const modalImage = document.getElementById("modalImage");
    if (modalImage) {
        modalImage.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    }

    // close modal when escape key is pressed
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    // Hide modal on loading page
    document.getElementById("photoModal").style.display = "none";

    // add modal to each image
    document.querySelectorAll(".photo img").forEach(img => {
        img.addEventListener("click", function() {
            openModal(this);
        });
    });

});
