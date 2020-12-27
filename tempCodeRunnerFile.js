function quickSort(array) {
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