function maximum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(maximum(9, 11, 2));
console.log(maximum(1, 5, 2));
console.log(maximum(1, 22, 3, 2));
