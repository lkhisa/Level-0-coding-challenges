function areaOfTriangle(side1, side2, side3) {
    var s = (side1 + side2 + side3)/2; //s is the semiperimeter.
    var area = Math.sqrt(s *(s - side1) * (s - side2) * (s - side3)); 
    console.log("The area is " + area + " square units");
}
areaOfTriangle(3, 4, 5);