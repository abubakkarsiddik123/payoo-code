console.log("machine added")


// machine id --> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value)
    return value;
}
// machine  -->  Balance

function getBalance(){
    const balanceElement= document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("current balance", Number(balance))
    return Number(balance);

}


// machine value -->set Balance
function setBalance(value){
    const balanceElement= document.getElementById("balance");
    balanceElement.innerText=value;
}


// machine id >hide all > show id 

function showOnly(id){
    const addmoney = document.getElementById("add-money")
    const cashout = document.getElementById("Cashout")
    const history = document.getElementById("history")
    
    // console.log(`add money ${addmoney} ,cashout ${cashout}`)

    // shobai ke hide kore dao
    addmoney.classList.add("hidden")
    cashout.classList.add("hidden")
    history.classList.add("hidden")

    // id wala element ta ke tumi show kora

    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
}