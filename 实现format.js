/**
 * format实现
 */

var testFormat = function (number) {
    let numberToString = number.toString();
    let reverseNumber = numberToString.split('').reverse().join('');
    let reg = /\d{3}/g;
    let matchRegArray = reverseNumber.match(reg);
    let remainingNumber = reverseNumber.split(reg);
    let reverseRemainingNumber = remainingNumber.reverse();
    let resultArray = matchRegArray.reduce((pv,cv,index,array)=>{
        pv.unshift(cv.split('').reverse().join(''));
        return pv;
    },[]);
    reverseRemainingNumber[0] !== '' ? resultArray.unshift(reverseRemainingNumber[0].split('').reverse().join('')) : resultArray;
    return resultArray.join(',');
}

console.log("res", testFormat(99999999912))