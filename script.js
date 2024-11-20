document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("nav .tabs li");
    const contents = document.querySelectorAll(".tab-content");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove active class from all tabs and contents
        tabs.forEach((t) => t.classList.remove("active"));
        contents.forEach((c) => c.classList.remove("active"));
  
        // Add active class to the clicked tab and corresponding content
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
      });
    });
  
    // Set the first tab as active by default
    tabs[0].click();
  });
  