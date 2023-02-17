function getAmount(inputId, val) {
    const inputFieldId = document.getElementById(inputId);
    const AmountString = inputFieldId.value;
    var AmountInt = parseInt(AmountString);
    
    if (val == true) {
        AmountInt = AmountInt + 1;
    }
    else {
        AmountInt = AmountInt - 1;
    }
    
    if (AmountInt != 0) {
        inputFieldId.value = AmountInt;
    }
    else {
        inputFieldId.value = 1;
    }
    return AmountInt;    
}

function getCost(amount, totalCostId, fixed) {
    const costId = document.getElementById(totalCostId);
    const totalCost = amount * fixed;
    
    if (amount != 0) {
        costId.innerText = totalCost;
    }
    else {
        costId.innerText = fixed;
    }

    return totalCost;
}

function subTotal() {
    const totalPhoneAmount = document.getElementById('totalPrice').innerText;
    const totalPhoneAmountInt = parseInt(totalPhoneAmount);

    const totalCaseAmount = document.getElementById('totalPriceCase').innerText;
    const totalCaseAmountInt = parseInt(totalCaseAmount);

    const totalSubTotal= totalCaseAmountInt + totalPhoneAmountInt;
    document.getElementById('subTotal').innerText = totalSubTotal;
    return totalSubTotal;
}

function finalTotal(totalCost) {
    const taxId = document.getElementById('tax');
    const totalId = document.getElementById('total');

    const priceTax = parseFloat(totalCost * 0.1).toFixed(2);
    const totalPriceCost = parseFloat(parseFloat(totalCost) + parseFloat(priceTax)).toFixed(2);
    
    if (totalCost >= 1278) {
        taxId.innerText = priceTax;
        totalId.innerText = totalPriceCost;
    } else {
        taxId.innerText = 0;
        totalId.innerText = 1278;
    }
}

document.getElementById('phonePlus').addEventListener('click', function () {
    const phoneAmount = getAmount('phoneAmount', true);   
    const cost = getCost(phoneAmount, 'totalPrice', 1219);
    const subTotalAmount = subTotal();
    finalTotal(subTotalAmount);
});

document.getElementById('phoneMinus').addEventListener('click', function () {
    const phoneAmount = getAmount('phoneAmount', false);
    const cost = getCost(phoneAmount, 'totalPrice', 1219);
    const subTotalAmount = subTotal();
    finalTotal(subTotalAmount);
});

document.getElementById('casePlus').addEventListener('click', function () {
    const caseAmount = getAmount('caseAmount', true);   
    const caseCost = getCost(caseAmount, 'totalPriceCase', 59);
    const subTotalAmount = subTotal();
    finalTotal(subTotalAmount);
});

document.getElementById('caseMinus').addEventListener('click', function () {
    const caseAmount = getAmount('caseAmount', false);
    const caseCost = getCost(caseAmount, 'totalPriceCase', 59);
    const subTotalAmount = subTotal();
    finalTotal(subTotalAmount);
});

document.getElementById('checkOut').addEventListener('click', function () {
    const iphoneAmount = document.getElementById('phoneAmount').value;
    const iphonePrice = document.getElementById('totalPrice').innerText;
    const iphoneCaseAmount = document.getElementById('caseAmount').value;
    const iphoneCasePrice = document.getElementById('totalPriceCase').innerText;
    const subTotalAmountPrice = document.getElementById('subTotal').innerText;
    const taxAmount = document.getElementById('tax').innerText;
    const totalAmount = document.getElementById('total').innerText;

    localStorage.setItem("iphoneAmount", iphoneAmount);
    localStorage.setItem("iphonePrice", iphonePrice);
    localStorage.setItem("iphoneCaseAmount", iphoneCaseAmount);
    localStorage.setItem("iphoneCasePrice", iphoneCasePrice);
    localStorage.setItem("subTotalAmountPrice", subTotalAmountPrice);
    localStorage.setItem("taxAmount", taxAmount);
    localStorage.setItem("totalAmount", totalAmount);

    window.location.href = "bill.html";
});