function celsiusToFahrenheit(C) {
    var F = (C * 9/5) + 32;
    return F + "°F"
}

function fahrenheitToCelsius(F) {
    var C = (F - 32) * 5/9;
    return C + "°C";
}
console.log(celsiusToFahrenheit(10));
console.log(fahrenheitToCelsius(35));
