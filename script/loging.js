
// document.getElementById("login-btn").addEventListener("click",function(){
//     const inputNumber = document.getElementById("input-number")
//     const contactNumber = inputNumber.value ;
//     console.log(contactNumber);

//     const inputPin = document.getElementById("input-pin");
//     const pin = inputPin.value;
//     console.log(pin)

//     if(contactNumber=="01904658175" && pin == "5588"){
//         alert("login successful");

//         window.location.assign("/home.html")

//     }else{
//         alert("login Filed")
//         return;
//     }


// })




document.getElementById("login-btn").addEventListener("click",function(){
    // get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber= numberInput.value ;
    console.log(contactNumber)
    // get the pin input
    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value ;
    console.log(pin)
    // match pin and mobile number
    if(contactNumber=="01234567890" && pin == "1234"){
        // true ::::> alert and homepage
        alert("login successful")
        // window.location.replace("/home.html")
        window.location.assign("/home.html")
    }else{
        // true ::::>alert return
        alert("login Failed");
        return;
    }
})