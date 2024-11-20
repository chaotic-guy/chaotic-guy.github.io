document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("nav .tabs li");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  tabs[0].click(); // Activate the first tab on load
});
