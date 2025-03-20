// Function to toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    sidebar.classList.toggle('active');
    mainContent.classList.toggle('shift');
}

// Close Sidebar when clicking outside
document.addEventListener("DOMContentLoaded", function() {
    let menuToggle = document.querySelector(".toggle");
    let sidebar = document.querySelector(".slide");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });    

    // Only close if clicking outside of sidebar and open button
    if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
        sidebar.classList.remove('active');
        document.querySelector('.main-content').classList.remove('shift');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown-btn");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            
            // Toggle visibility of main dropdown content
            let dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                document.querySelectorAll(".dropdown-content").forEach((content) => {
                    content.style.display = "none";
                });
                dropdownContent.style.display = "block";
            }
        });
    });

    // Handle nested dropdowns for QUADRATIC & WEIRD
    let nestedDropdowns = document.querySelectorAll(".nested-dropdown-btn");

    nestedDropdowns.forEach((nestedDropdown) => {
        nestedDropdown.addEventListener("click", function (event) {
            event.preventDefault();
            let nestedDropdownContent = this.nextElementSibling;
            nestedDropdownContent.style.display =
                nestedDropdownContent.style.display === "block" ? "none" : "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navIcon = document.querySelector(".nav-icon"); // Replace with your navbar icon class
    const title = document.querySelector(".sort-title");

    navIcon.addEventListener("click", function() {
        title.classList.toggle("animate-title"); // Toggles the animation class
    });
});

function toggleSidebar() {
    document.querySelector('.slide').classList.toggle('active');
}


