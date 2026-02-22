document.getElementById("cashout-btn").addEventListener("click",function(){
    // get the agent number and validate

    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput .value ;
    if(cashoutNumber.length !==11){
        alert("Invalid Agent Number");
        return;
    }

    // get the amount,validate convert to number

    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount=cashoutAmountInput.value ;
    console.log(cashoutAmount)
    // get the current Balance ,validate,convert to number
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance)
    // Calculate new balance
    const newbalance=Number(balance)-Number(cashoutAmount);
    if(newbalance <0){
        alert("Invalid balance");
        return;
    }
    


    // get the pin and verify
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if(pin === "1234"){
        // true::show an alert >set Balance
        alert("cashout successfull")
        console.log("newbalance",newbalance) 
        balanceElement.innerText=newbalance;

    }else{
        // true ::show an error alert >set Balance
        alert("Invalid pin")
        return;

    }



})

