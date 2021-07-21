result = [];
function commonLetters(s1, s2) {
    var ls1 = Array.from(s1);
    var ls2 = Array.from(s2);

    for (let i = 0; i < ls2.length; i++) {
        if (ls1.includes(ls2[i])) {
            result.push(ls2[i]);
        }
    }
    return "Common letters: " + result;
}   
console.log(commonLetters("House", "Computers"));
