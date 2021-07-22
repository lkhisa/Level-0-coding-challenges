function showVowels(statement) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = [];
    for (let i = 0; i < statement.length; i++) {
        if (vowels.includes(statement[i])) {
            if (!result.includes(statement[i].toLowerCase())) {
            result.push(statement[i].toLowerCase());
            }    
        }
    }
    console.log("Vowels: " + result);
}

showVowels("Umuzi");
