// 1. add event handler with the withdraw button
// get the amount from withdraw input field

document.getElementById('btn-withdraw').addEventListener('click', function() {
  const withdrawField = document.getElementById('withdraw-field');
  const previousWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(previousWithdrawAmountString);
  
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const  previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
  

  
  
  
  withdrawField.value = '';
})