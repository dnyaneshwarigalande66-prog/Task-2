function convertTemp() {
    const temp = document.getElementById("tempInput").value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const result = document.getElementById("result");

    // Validation
    if (temp === "") {
        result.textContent = "Please enter a temperature value.";
        return;
    }

    let convertedTemp;

    if (unit === "celsius") {
        // Celsius to Fahrenheit & Kelvin
        const f = (temp * 9/5) + 32;
        const k = parseFloat(temp) + 273.15;
        convertedTemp = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    }
    else if (unit === "fahrenheit") {
        // Fahrenheit to Celsius & Kelvin
        const c = (temp - 32) * 5/9;
        const k = (temp - 32) * 5/9 + 273.15;
        convertedTemp = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    }
    else if (unit === "kelvin") {
        // Kelvin to Celsius & Fahrenheit
        const c = temp - 273.15;
        const f = (temp - 273.15) * 9/5 + 32;
        convertedTemp = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    result.textContent = "Converted Temperature: " + convertedTemp;
}
