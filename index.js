function AmountChange() {
    document.getElementById('txtAmount').value =
        document.getElementById('amountRange').value;
}
function YearChange() {
    document.getElementById('txtYears').value =
        document.getElementById('yearRange').value;
}
function RateChange() {
    document.getElementById('txtRate').value =
        document.getElementById('interestRange').value;
}
function CalculateEMI() {
    var textAmount = document.getElementById('txtAmount').value;
    var textYears = document.getElementById('txtYears').value;
    var textInterestRate = document.getElementById('txtRate').value;

    var Amount = parseInt(textAmount);
    var tenure = parseInt(textYears) * 12;
    var rateOfInterest = parseFloat(textInterestRate);

    var emiAmount =
        (Amount * rateOfInterest * (1 + rateOfInterest) * tenure) /
        ((1 + rateOfInterest) * tenure - 1);

    document.getElementById('result').innerHTML = emiAmount;
}

