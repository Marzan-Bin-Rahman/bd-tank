// validating email


// event listener
document.getElementById('button').addEventListener('click', function(){
    // getting the inputs
    console.log('button');
    const emailInput = document.getElementById('email-input').value;
    const passwordInput = document.getElementById('password-input').value;
    if(emailInput == "hacker@kimJongUnerDesh.com" && passwordInput == "masudTumiValoHoyeZao"){
        window.location.href = "banking.html";
    }
    else if(emailInput == "" || passwordInput == ""){
        alert("You should fill all the field lil Hacker 🐱‍💻 !!");
    }
    else{
        alert("You can't enter the bank !! As we will not tell you that 🧠\nThe email address is: hacker@kimerJongUnerDesh.com \nAnd the password is: masudTumiValoHoyeZao \nMUHAHAHAHAH!! You can't enter...")
    }
})