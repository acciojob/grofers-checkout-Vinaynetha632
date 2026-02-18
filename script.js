
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  // Select all price elements
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Loop through prices and calculate sum
  prices.forEach((item) => {
    total += parseFloat(item.innerText);
  });

  // Remove old total row if it exists (prevents duplicate rows)
  const oldTotal = document.getElementById("total-row");
  if (oldTotal) {
    oldTotal.remove();
  }

  // Create new row
  const newRow = document.createElement("tr");
  newRow.setAttribute("id", "total-row");

  const newCell = document.createElement("td");
  newCell.setAttribute("colspan", "2");
  newCell.innerText = "Total Price: " + total;

  newRow.appendChild(newCell);

  // Append new row to table
  const table = document.querySelector("table");
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
