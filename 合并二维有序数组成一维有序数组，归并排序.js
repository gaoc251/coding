function mergeSort(arr) {
    let len = arr.length;
    if(len <= 1) return arr[0];
    let middleNum = Math.floor(len / 2);
    let left = arr.slice(0, middleNum);
    let right = arr.slice(middleNum);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) {
            result.push(left.shift())
        }else {
            result.push(right.shift())
        }
    }
    while(left.length > 0) {
        result.push(left.shift());
    }
    while(right.length > 0) {
        result.push(right.shift());
    }
    return result;
}
var arr=[[1,2,4],[2,3,7],[3,5,7],[4,5,8]]
console.log("res", mergeSort(arr))