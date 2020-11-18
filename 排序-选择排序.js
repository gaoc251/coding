/**
 * 选择排序
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕
 * 时间复杂度 n的平方 
 * 空间复杂度 1
 */

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for(var i = 0; i < len - 1; i++) {
        minIndex = i;
        for(var j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        console.log("最小值", minIndex)
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        console.log("i:" + i, arr)
    }
    return arr;
} 
console.log("res", selectionSort([1,8,2,6,7,0,4]))