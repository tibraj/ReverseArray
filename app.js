function reverseArray(array) {
    let output = [];
    for(let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

console.log(reverseArray([5,7,9,11,15,17,20]));