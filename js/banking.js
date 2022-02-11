function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const depositInputText = depositInput.value;
    const depositAmount = parseFloat(depositInputText);
    depositInput.value = "";
    return depositAmount;
}

function addingToTotal(inputId, depositAmount){
    const depositTotal = document.getElementById(inputId);
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositAmount;
}

function updateTotal(isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + depositAmount;
    }
    else{
        balanceTotal.innerText = balanceTotalAmount - depositAmount;
    }
}

// game with deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    // getting deposit input
/*     const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositAmount = parseFloat(depositInputText); */
    depositAmount = getInputValue('deposit-input');
    addingToTotal("deposit-total", depositAmount);
    updateTotal(true);


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
    addingToTotal("withdraw-total", withdrawAmount);
    updateTotal(false);
    
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