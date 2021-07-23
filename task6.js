function maximum() { 
    return Math.max.apply(Math, arguments);   
}
console.log(maximum(9, 11, 2));
console.log(maximum(1, 5, 2));
console.log(maximum(1, 22, 3, 2));
