// sidebar behaviour

const sidebarLinks = document.querySelectorAll(".custom-sidebar a");
const contentSections = document.querySelectorAll(".page-content > div");

function initializePage() {
  contentSections.forEach((section) => {
    section.style.display = "none";
  });

  const initialSectionId = window.location.hash.substr(1);
  const initialSection = document.getElementById(initialSectionId);

  if (initialSection) {
    initialSection.style.display = "block";

    sidebarLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${initialSectionId}`) {
        link.classList.add("active");
      }
    });
  }
}

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebarLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    contentSections.forEach((section) => {
      section.style.display = "none";
    });

    document.querySelector(link.getAttribute("href")).style.display = "block";
  });
});

// page navigation
// Function to show page content based on pageId

function showPageContent(pageId) {
  const contentSections = document.querySelectorAll(".page-content > div");

  contentSections.forEach((section) => {
    section.style.display = "none";
  });

  const targetSection = document.getElementById(pageId);
  if (targetSection) {
    targetSection.style.display = "block";
  }
}

// Common event listener for all buttons with class "show-page-button"
const showPageButtons = document.querySelectorAll(".show-page-button");

showPageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageId = button.getAttribute("data-page");
    showPageContent(pageId);
  });
});
