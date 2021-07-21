function areaOfTriangle(side1, side2, side3) {
    var s = (side1 + side2 + side3)/2; //s is the semiperimeter.
    var area = Math.sqrt(s *(s - side1) * (s - side2) * (s - side3)); 
    return area + " square units";
}
console.log(areaOfTriangle(3, 4, 5));
