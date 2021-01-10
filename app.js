function reverseArray(array) {
    let output = [];
    for(let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

console.log(reverseArray([5,7,9,11,15,17,20]));

function reverseInPlace(array) {
    for(let i = 0; i < Math.floor(array.length / 2); i++) {
        let original = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = original;
    }
    return array;
}