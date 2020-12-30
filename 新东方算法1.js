// [1, [2, [ [3, 4], 5], 6]] => [1, 2, 3, 4, 5, 6]
function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                 : arr.slice();
};
const arr = [1, [2, [ [3, 4], 5], 6]];
console.log("res", flatDeep(arr, Infinity))