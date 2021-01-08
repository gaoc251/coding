/*
 * 有序有重复数字的数组，查找目标数字最后一位索引位置
 */

var arr = [1, 2, 3, 3, 3, 3, 4, 5]
var k = 3

function GetNumberOfK(data, k) {
    // write code here
    let l = 0,
    r = data.length;
    let mid;
    while(l<r) {
        mid = Math.floor((l+r)/2);
        if (data[mid]<k) {
            while(data[mid] == data[mid+1]) {
                mid++
            }
            l= ++mid;
        } else if (data[mid]>k) {
            while(data[mid] == data[mid-1]) {
                mid--
            }
            r=--mid
        } else {
            let sign1 = mid ,sign2 = mid;
            while(sign1 <= r && data[sign1] == data[sign1 + 1]) {
                sign1++;
            }
            while(sign2 >= l && data[sign2] == data[sign2 - 1]) {
                sign2--;
            }
            return sign1-sign2+1
        }
    }
    return 0
}

console.log("res", GetNumberOfK(arr, k))