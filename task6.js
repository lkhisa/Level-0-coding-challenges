function maximum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}
maximum(9, 11, 2);
maximum(1, 5, 2);
maximum(1, 22, 3, 2);
maximum(3, 2, 4, 10);