document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositAmount = getInputValue('deposit-amount');

    const previousDeposit = getElementValue('previous-deposit');

    const newDeposit = depositAmount + previousDeposit;
    setValue('previous-deposit', newDeposit);

    const previousBalance = getElementValue('previous-balance');
    const newBalance = previousBalance + depositAmount;
    setValue('previous-balance', newBalance);

})

document.getElementById('withdraw-btn').addEventListener('click', function() {

    const withdrawAmount = getInputValue('withdraw-amount');

    const previousWithdraw = getElementValue('previous-withdraw');

    const newWithdraw = withdrawAmount + previousWithdraw;
    setValue('previous-withdraw', newWithdraw);

    const previousBalance = getElementValue('previous-balance');
    const newBalance = previousBalance - withdrawAmount;
    setValue('previous-balance', newBalance);



})