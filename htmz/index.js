const labels = {
  github: "https://github.com/marcomaza92",
};
const currentYear = new Date().getFullYear();

document.querySelector(".footer a").setAttribute("href", labels.github);
document.querySelector(".footer span").textContent = currentYear;
