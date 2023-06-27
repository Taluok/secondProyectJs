let billAmounts = []; // Array para almacenar los montos de cuenta

function Bill(amount) {
    this.amount = amount;
}

function calculateTip() {
    let billAmount = parseFloat(prompt("Ingrese el monto de la cuenta:"));
    let tipPercentage = parseFloat(prompt("Ingrese el porcentaje de propina:"));

    let tipAmount = billAmount * (tipPercentage / 100);
    let totalAmount = billAmount + tipAmount;

    // Crear un nuevo objeto Bill y agregarlo al array
    let bill = new Bill(billAmount);
    billAmounts.push(bill);

    // Salida de los datos procesados
    alert("Propina: $" + tipAmount.toFixed(2) + "\nTotal a pagar: $" + totalAmount.toFixed(2));
}

function searchBillAmount(targetAmount) {
    // Buscar el monto de cuenta en el array de objetos
    let index = billAmounts.findIndex(bill => bill.amount === targetAmount);

    if (index !== -1) {
        alert("El monto de cuenta $" + targetAmount.toFixed(2) + " se encuentra en el índice " + index);
    } else {
        alert("El monto de cuenta $" + targetAmount.toFixed(2) + " no se encontró en el array");
    }
}

function filterBillAmounts(minAmount, maxAmount) {
    // Filtrar los montos de cuenta dentro del rango especificado
    let filteredAmounts = billAmounts.filter(bill => bill.amount >= minAmount && bill.amount <= maxAmount);

    alert("Montos de cuenta dentro del rango $" + minAmount.toFixed(2) + " - $" + maxAmount.toFixed(2) + ":\n" + filteredAmounts.map(bill => bill.amount.toFixed(2)).join("\n"));
}


