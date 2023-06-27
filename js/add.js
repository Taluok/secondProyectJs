function calculateTip() {
    let billAmount = parseFloat(prompt("Ingrese el monto de la cuenta:"));
    let tipPercentage = parseFloat(prompt("Ingrese el porcentaje de propina:"));
    
    let tipAmount = billAmount * (tipPercentage / 100);
    let totalAmount = billAmount + tipAmount;
    
    // Salida de los datos procesados
    alert("Propina: $" + tipAmount.toFixed(2) + "\nTotal a pagar: $" + totalAmount.toFixed(2));
}

