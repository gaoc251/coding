/**
 * 实现找到数组中重复次数最多的元素，数组由字符串和数字组成
 */

var getMaxRepCount = function (arr) {
    let newArr = arr.reduce(function (acc, cur, curIndex) {
        if (acc[cur]) {
            acc[cur]++;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, [])
    let maxCount = 0;
    let max = 0;
    for (let x in newArr) {
        if (newArr[x] > maxCount) {
            max = x;
            maxCount = newArr[x];
        }
    }
    return max;
}
let arr6 = [1, 5, 6, 2, 4, 6, 8, 9, 3];
console.log("res", getMaxRepCount(arr6));