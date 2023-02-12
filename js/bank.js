document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositAmount = document.getElementById('deposit-amount');
    const deposit = depositAmount.value;
    const newDepositAmount = parseFloat(deposit);


    const previousDeposit = document.getElementById('previous-deposit');
    const previous = previousDeposit.innerText;
    const previousAmount = parseFloat(previous);


    const previousBalance = document.getElementById('previous-balance');
    const balance = previousBalance.innerText;
    const newPreviousBalance = parseFloat(balance);


    const totalDeposit = newDepositAmount + previousAmount;
    previousDeposit.innerText = totalDeposit;
    previousBalance.innerText = totalDeposit;

    depositAmount.value = '';

})

document.getElementById('withdraw-btn').addEventListener('click', function() {

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdraw = withdrawAmount.value;
    const newWithdraw = parseFloat(withdraw);


    const previousWithdraw = document.getElementById('previous-withdraw');
    const previous = previousWithdraw.innerText;
    const newPreviousWithdraw = parseFloat(previous);


    const previousBalance = document.getElementById('previous-balance');
    const balance = previousBalance.innerText;
    const newPreviousBalance = parseFloat(balance);
    previousBalance.innerText = newPreviousBalance - newWithdraw;

    if (newPreviousBalance === 0) {
        alert('Insufficient Balance!! Please Deposit Some Money.');
        previousBalance.innerText = 00;
        previousWithdraw.innerText = 00;
    } else {

        const totalWithdraw = newWithdraw + newPreviousWithdraw;
        previousWithdraw.innerText = totalWithdraw;

    }


    withdrawAmount.value = '';

})