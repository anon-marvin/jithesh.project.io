document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("inputForm");
  var table = document.getElementById("violationTable");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var serialNo = document.getElementById("serialNoInput").value;
    var violation = document.getElementById("violationInput").value;
    var amount = document.getElementById("amountInput").value;
    var status = document.getElementById("statusInput").value;

    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    cell1.innerText = serialNo;
    var cell2 = newRow.insertCell(1);
    cell2.innerText = violation;
    var cell3 = newRow.insertCell(2);
    cell3.innerText = amount;
    var cell4 = newRow.insertCell(3);
    cell4.innerText = status;

    cell1.classList.add("myCellStyle");
    cell2.classList.add("myCellStyle");
    cell3.classList.add("myCellStyle");
    cell4.classList.add("myCellStyle");

    form.reset();
  });

  // Adding an event listener for the table to handle status changes.
  table.addEventListener("click", function(event) {
    var target = event.target;

    // Check if the clicked element is in a cell and has the "Not Paid" status.
    if (target.tagName === "TD" && target.textContent === "Not Paid") {
      target.textContent = "Paid";
    }
  });
});
