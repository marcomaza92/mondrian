const labels = {
  name: "marcomaza92",
};

const currentYear = new Date().getFullYear();
document
  .getElementsByClassName("footer")
  .item(0).innerHTML = `${labels.name} - ${currentYear}`;
