const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach((item) => {
    total += parseFloat(item.innerText);
  });

  // Remove old answer row if exists
  const oldAns = document.getElementById("ans");
  if (oldAns) {
    oldAns.parentElement.remove();
  }

  const newRow = document.createElement("tr");

  const newCell = document.createElement("td");
  newCell.setAttribute("colspan", "2");
  newCell.setAttribute("id", "ans");
  newCell.innerText = total;

  newRow.appendChild(newCell);

  const table = document.querySelector("table");
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
