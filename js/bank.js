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
    const totalBalance = newPreviousBalance + newDepositAmount;
    previousBalance.innerText = totalBalance;

    depositAmount.value = '';

})

document.getElementById('withdraw-btn').addEventListener('click', function() {

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdraw = withdrawAmount.value;
    const newWithdraw = parseFloat(withdraw);
    if (isNaN(newWithdraw)) {
        alert('Please enter an amount.');
        return;
    }


    const previousWithdraw = document.getElementById('previous-withdraw');
    const previous = previousWithdraw.innerText;
    const newPreviousWithdraw = parseFloat(previous);


    const previousBalance = document.getElementById('previous-balance');
    const balance = previousBalance.innerText;
    const newPreviousBalance = parseFloat(balance);
    withdrawAmount.value = '';


    if (newWithdraw > newPreviousBalance) {
        alert('Insufficient Balance!! Please Deposit Some Money.');
        return;
    }

    previousBalance.innerText = newPreviousBalance - newWithdraw;
    const totalWithdraw = newWithdraw + newPreviousWithdraw;
    previousWithdraw.innerText = totalWithdraw;



})