document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("nav .tabs li");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (!tab.dataset.tab) return; // Skip if no tab content linked

      // Reset active states
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      // Set active tab and content
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  // Default to the first tab
  tabs[0].click();
});
