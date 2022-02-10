document
  .getElementById("deposit-submit")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");

    const newDepositAmountText = depositInput.value;
    depositInput.value = "";
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById("deposit-total");

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balaceTotal = document.getElementById("balace-total");

    const balaceTotalText = balaceTotal.innerText;
    const previousBalaceTotal = parseFloat(balaceTotalText);
    const newBalaceTotal = previousBalaceTotal + newDepositAmount;
    balaceTotal.innerText = newBalaceTotal;
  });

document
  .getElementById("withdraw-submit")
  .addEventListener("click", function () {
    const withDrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withDrawInput.value;
    withDrawInput.value = "";
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    const balaceTotal = document.getElementById("balace-total");
    const previousBalaceText = balaceTotal.innerText;
    const previousBalaceTotal = parseFloat(previousBalaceText);
    const newBalaceTotal = previousBalaceTotal - newWithdrawAmount;

    balaceTotal.innerText = newBalaceTotal;
  });
