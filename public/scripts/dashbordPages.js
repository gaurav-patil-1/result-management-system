// sidebar behaviour
function initializePage() {
  const contentSections = document.querySelectorAll(".page-content > div");

  contentSections.forEach((section) => {
    section.style.display = "none";
  });

  const initialSectionId = "home"; // Set the default section here
  const initialSection = document.getElementById(initialSectionId);

  if (initialSection) {
    initialSection.style.display = "block";

    const sidebarLinks = document.querySelectorAll(".custom-sidebar a");
    sidebarLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${initialSectionId}`) {
        link.classList.add("active");
      }
    });
  }
}

const sidebarLinks = document.querySelectorAll(".custom-sidebar a");
const contentSections = document.querySelectorAll(".page-content > div");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebarLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const targetSectionId = link.getAttribute("href").substr(1);
    contentSections.forEach((section) => {
      section.style.display = section.id === targetSectionId ? "block" : "none";
    });
  });
});
