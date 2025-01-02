const labels = {
  github: "https://github.com/marcomaza92",
};
const currentYear = new Date().getFullYear();

document.querySelector(".footer .anchor").setAttribute("href", labels.github);
document.querySelector(".footer .currentYear").textContent = currentYear;
