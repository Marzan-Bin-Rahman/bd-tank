function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositAmount = parseFloat(depositInputText);
    depositInput.value = "";
    return depositAmount;
}

function addingToTotal(depositAmount){
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositAmount;
}

function updateTotal(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + depositAmount;
}

// game with deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    // getting deposit input
/*     const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositAmount = parseFloat(depositInputText); */
    depositAmount = getInputValue();
    // getting the amount
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositAmount; */
    addingToTotal(depositAmount);
    // clearing the input
    // depositInput.value = "";

    // adding to total balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + depositAmount; */
    updateTotal();
})

// game with deposit

