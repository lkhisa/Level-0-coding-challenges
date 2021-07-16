function celsiusToFahrenheit(C) {
    var F = (C * 9/5) + 32;
    console.log(F + "°F")
}

function fahrenheitToCelsius(F) {
    var C = (F - 32) * 5/9;
    console.log(C + "°C");
}
celsiusToFahrenheit(10);
fahrenheitToCelsius(35);