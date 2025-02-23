function convertTemp() {
    let tempInput = parseFloat(document.getElementById("tempInput").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let resultElement = document.getElementById("result");

    if (isNaN(tempInput)) {
        resultElement.innerHTML = "Please enter a valid number";
        return;
    }

    let convertedTemp;
    if (fromUnit === toUnit) {
        convertedTemp = tempInput;
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        convertedTemp = (tempInput * 9/5) + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        convertedTemp = tempInput + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        convertedTemp = (tempInput - 32) * 5/9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        convertedTemp = (tempInput - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        convertedTemp = tempInput - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        convertedTemp = (tempInput - 273.15) * 9/5 + 32;
    }

    resultElement.innerHTML = `Converted temperature: ${convertedTemp.toFixed(2)} °${toUnit.charAt(0)}`;
}