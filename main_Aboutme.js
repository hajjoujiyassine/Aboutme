document.addEventListener("DOMContentLoaded", () => {
  
  const bars = document.querySelectorAll(".skill-lange");

  bars.forEach(bar => {
    const level = bar.getAttribute("data-level");

    const fill = document.createElement("div");
    fill.classList.add("skill-fill");

    bar.appendChild(fill);

    setTimeout(() => {
      fill.style.width = level + "%";
    }, 300);
  });


  const bars1 = document.querySelectorAll(".skill-code");

  bars1.forEach(bar1 => {
    const level = bar1.getAttribute("data-level");

    const fill = document.createElement("div");
    fill.classList.add("skill-fill");

    bar1.appendChild(fill);

    setTimeout(() => {
      fill.style.width = level + "%";
    }, 300);
  });

});
