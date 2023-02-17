const iphoneAmount= localStorage.getItem("iphoneAmount");
const iphonePrice= localStorage.getItem("iphonePrice");
const iphoneCaseAmount= localStorage.getItem("iphoneCaseAmount");
const iphoneCasePrice= localStorage.getItem("iphoneCasePrice");
const subTotalAmount= localStorage.getItem("subTotalAmountPrice");
const taxAmount= localStorage.getItem("taxAmount");
const totalAmount = localStorage.getItem("totalAmount");

document.getElementById('phonePiece').innerText = iphoneAmount;
document.getElementById('phoneAmount').innerText = iphonePrice;
document.getElementById('casePiece').innerText = iphoneCaseAmount;
document.getElementById('caseAmount').innerText = iphoneCasePrice;
document.getElementById('subtotal').innerText = subTotalAmount;
document.getElementById('tax').innerText = taxAmount;
document.getElementById('total').innerText = totalAmount;