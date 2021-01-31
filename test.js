function arrSort(arr1, arr2) {
    var [i,j] = [0,0];
    let res=[];
    while (i<arr1.length ||j<arr2.length) {
        if (arr1[i]>arr2[j]) {
            res.push(arr2[j])
            j++
        } else if (arr1[i]<arr2[j]){
            res.push(arr1[i])
            i++
        } else {
            arr1[i] && res.push(arr1[i])
            i++
            arr2[j] && res.push(arr2[j])
            j++
        }
    }
    return res
}

let arrs = arrSort([2,4,6,7], [1,2,3,5,8,9,10,33,44,49]);

console.log(arrs);