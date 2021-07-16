function timeConverter(num) {
    var hours = Math.floor(num/60);
    var minutes = num % 60;
    if (hours == 1) {
        message1 = "1Hour, ";
    } else {
        message1 = hours + "Hours, ";
    }
    if (minutes == 1) {
        message2 = "1Minute";
    } else {
        message2 = minutes + "Minutes";
    }
    return message1 + message2;
}
console.log(timeConverter(71));
console.log(timeConverter(133));