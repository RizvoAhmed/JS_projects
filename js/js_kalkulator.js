function inflationCalculator() {
  let inflacionRate = document.querySelector("#inflationRate");
  let money = document.querySelector("#money");
  let years = document.querySelector("#years");

  inflacionRate = parseFloat(inflacionRate.value);
  money = parseFloat(money.value);
  years = parseFloat(years.value);

  let worth = money + money * (inflacionRate / 100);

  for (let i = 1; i < years; i++) {
    worth += worth * (inflacionRate / 100);
  }

  worth = worth.toFixed(2);

  console.log(worth);

  let newElement = document.createElement("div");
  newElement.className = "new-value";
  newElement.innerText = `Danasnjih ${money} eura vrijedi isto kao ${worth} eura za ${years} godina.`;

  document.querySelector(".calculator_container").appendChild(newElement);
}
