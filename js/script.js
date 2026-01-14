const elements = document.querySelectorAll(".fade-in, .slide-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));

const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const info = button.nextElementSibling;

    if (info.style.maxHeight) {
      info.style.maxHeight = null;
      button.textContent = "More Info ▼";
    } else {
      info.style.maxHeight = info.scrollHeight + "px";
      button.textContent = "Less Info ▲";
    }
  });
});
