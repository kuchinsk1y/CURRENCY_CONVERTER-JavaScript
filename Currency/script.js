function convertCurrency() {
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;
  const amount = document.getElementById("amount").value;

  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const conversionRate = data.rates[toCurrency];
      const convertedAmount = amount * conversionRate;
      document.getElementById(
        "result"
      ).innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    })
    .catch((error) => {
      console.error(error);
    });
}
