/*
{
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
}
ghlmncd
7812131434
ghlmndc
7812131443

bba
221

dkhc
41183
dckh
43118
hcdk
83411
*/

const dict = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
}

function checkValue(arr) {
    var value = ''
    arr.split('').forEach(e => {
        value += dict[e]
    });
    return value
}

function leksikografis(word) {
    var tmpResult = 0
    let tmpVal = 0
    var initialValue = checkValue(word)
    const listOfWord = permut(word)

    listOfWord.forEach(val => {
        tmpResult = checkValue(val)

        if (tmpVal === 0) {
            if (tmpResult > initialValue) {
                tmpVal = tmpResult
            }
        }
        else if (tmpResult < tmpVal && tmpResult > initialValue) {
            tmpVal = tmpResult
        }
    })
    if (tmpVal === 0) {
        return console.log("Tidak Ada Kata Baru")
    }
    return console.log(tmpVal)
};

leksikografis("ghlmncd")
// 11946
// asfd

function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations
    for (var i = 0; i < string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue; // skip it this time

        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)
    }
    return permutations;
}