function inflationCalculator() {
  let inflationRate = document.getElementById("inflationRate");
  let money = document.getElementById("money");
  let years = document.getElementById("years");

  inflationRate = parseFloat(inflationRate.value);
  money = parseFloat(money.value);
  years = parseFloat(years.value);

  let worth = money + money * (inflationRate / 100);

  for (let i = 1; i < years; i++) {
    worth += worth * (inflationRate / 100);
  }
  worth = worth.toFixed(2);

  let newElement = document.createElement("div");
  newElement.className = "new-value";
  newElement.innerText = `Danasnjih ${money} eura vrijedi isto kao ${worth} eura za ${years} godina.`;

  document.querySelector(".calculator_container").appendChild(newElement);
}
