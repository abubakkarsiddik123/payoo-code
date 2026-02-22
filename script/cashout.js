document.getElementById("cashout-btn").addEventListener("click", function () {
  // get the agent number and validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length !== 11) {
    alert("Invalid Agent Number");
    return;
  }

  // get the amount,validate convert to number
  const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();
  //4. Calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);

  if (newBalance < 0) {
    alert("Invalid balance");
    return;
  }

  const Pin = getValueFromInput("cashout-pin");
  if (Pin === "1234") {
    //5.1: true::show an alert >set Balance
    alert("cashout successfull");
    setBalance(newBalance);
  } else {
    //5.2: true ::show an error alert >set Balance
    alert("Invalid pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   //1. get the agent number and validate

//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   if (cashoutNumber.length !== 11) {
//     alert("Invalid Agent Number");
//     return;
//   }

//   // 2.get the amount,validate convert to number

//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);
//   //3. get the current Balance ,validate,convert to number
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);
//   //4. Calculate new balance
//   const newbalance = Number(balance) - Number(cashoutAmount);
//   if (newbalance < 0) {
//     alert("Invalid balance");
//     return;
//   }

//   //5. get the pin and verify
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   if (pin === "1234") {
//     //5.1: true::show an alert >set Balance
//     alert("cashout successfull");
//     console.log("newbalance", newbalance);
//     balanceElement.innerText = newbalance;
//   } else {
//     //5.2: true ::show an error alert >set Balance
//     alert("Invalid pin");
//     return;
//   }
// });
