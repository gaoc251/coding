/**
 * 快排
 * 小单元排序
 * 1、选择一个基准pivot
 * 2、小于pivot都在左边，大于都在右边（分区操作）
 */

function quickSort(array) {
    if (array.length <=1) return array;
    const privotIndex = Math.floor(array.length/2);
    const privot = array.splice(privotIndex, 1)[0];
    const left = [], right = [];
    array.forEach(item => {
        if (privot > item) {
            left.push(item);
        } else {
            right.push(item)
        }
    })
    return quickSort(left).concat(privot, quickSort(right));
}
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(quickSort(arr))