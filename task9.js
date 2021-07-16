function showVowels(statement) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = "";
    for (let i = 0; i < statement.length; i++) {
        if (vowels.includes(statement[i])) {
            result += statement[i];
        }
    }
    return result;
}

console.log(showVowels("Umuzi"));