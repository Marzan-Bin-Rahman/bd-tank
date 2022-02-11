function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const amount = parseFloat(inputText);
    input.value = "";
    return amount;
}

function addingToTotal(inputId, depositAmount){
    const total = document.getElementById(inputId);
    const totalText = total.innerText;
    const totalAmount = parseFloat(totalText);
    total.innerText = totalAmount + depositAmount;
}

function updateTotal(amount, isAdd){
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + amount;
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + amount;
    }
    else{
        balanceTotal.innerText = balanceTotalAmount - amount;
    }
}

// game with deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
    addingToTotal("deposit-total", depositAmount);
    updateTotal(depositAmount, true);
    }
    // getting deposit input
/*     const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositAmount = parseFloat(depositInputText); */



    // getting the amount
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositAmount; */
    
    // clearing the input
    // depositInput.value = "";

    // adding to total balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + depositAmount; */
    
})

// game with deposit

document.getElementById('withdraw-button').addEventListener('click', function(){
    withdrawAmount = getInputValue('withdraw-input');
    if(withdrawAmount > 0){
        addingToTotal("withdraw-total", withdrawAmount);
        updateTotal(withdrawAmount, false);
    }

    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText); */
    
    

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount; */

    
    // withdrawInput.value = "";

/*     const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrawAmount; */

    
})