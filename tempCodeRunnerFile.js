function computeSeaconds(str) {
    debugger
    let arr = str.split(':');
    let sum = 0;
    for (var i = 0;i<arr.length;i++) {
        let temp = arr[i];
        sum = sum + Number(temp)? 0: Number(temp)* Math.pow(60, 2-i)
    }
    return sum;
}
console.log("res", computeSeaconds("01:08:20"))