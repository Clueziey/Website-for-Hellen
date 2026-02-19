// This runs once the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Hellen's CAS Portfolio!");

    // Simple alert when clicking the header (just to test if it works)
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        alert("Thanks for visiting my CAS journey!");
    });
});