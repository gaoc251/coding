const test = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];

function quickSort(array) {
    if (array.length <=1) return array;
    let left = [], right = []
    let prvoitIndex = Math.floor(array.length/2);
    let prvoit = array.splice(prvoitIndex, 1)[0];
    array.forEach(item => {
        if (item < prvoit) {
            left.push(item)
        } else {
            right.push(item)
        }
    });
    return quickSort(left).concat(prvoit, quickSort(right))
}

console.log("res", quickSort(test))

// function quickSort(array) {
//     if (array.length <=1) return array;
//     const privotIndex = Math.floor(array.length/2);
//     const privot = array.splice(privotIndex, 1)[0];
//     const left = [], right = [];
//     array.forEach(item => {
//         if (privot > item) {
//             left.push(item);
//         } else {
//             right.push(item)
//         }
//     })
//     return quickSort(left).concat(privot, quickSort(right));
// }
// const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
// console.log(quickSort(arr))