const input = document.getElementById("input");
const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    "https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      data.data.find((item) => {
        if (item.name === input.value) {
          const Card = `
<div id="Card">
<img id="img" src= 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg'/>
<p><strong>Country Name:</strong>${item.name}</p>
<p><strong>Currency:</strong>${item.currency}</p>
<p><strong>DialCode:</strong>${item.dialCode}</p>
<p><strong>UnicodeFlag:</strong>${item.unicodeFlag}</p>
</div>

`;
          console.log(`${item.name}`);
          container.innerHTML = Card;
        }
      });
    });
});
