function checkCashRegister(price, cash, cid) {
  const currencyUnitValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;

  let cidTotal = 0;
  for (let i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1];
  }

  if (changeDue > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeDue === cidTotal) {
    return { status: "CLOSED", change: cid };
  }

  const change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const currencyUnit = cid[i][0];
    const currencyValue = currencyUnitValues[currencyUnit];
    let currencyAmount = cid[i][1];
    let currencyUsed = 0;

    while (changeDue >= currencyValue && currencyAmount > 0) {
      changeDue -= currencyValue;
      changeDue = Math.round(changeDue * 100) / 100;
      currencyAmount -= currencyValue;
      currencyUsed += currencyValue;
    }

    if (currencyUsed > 0) {
      change.push([currencyUnit, currencyUsed]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
}

// Testes
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0]
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
    ])
);
                      console.log(checkCashRegister(19.5, 20, [
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
    ])
);