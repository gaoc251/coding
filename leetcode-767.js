const getIdx = (c) => c.charCodeAt() - 'a'.charCodeAt();
const getAlpha = (c) => String.fromCharCode(c);

var reorganizeString = function(S) {
    if (S.length < 2) {
        return S;
    }
    const counts = new Array(26).fill(0);
    let maxCount = 0;
    const length = S.length;
    for (let i = 0; i < length; i++) {
        const c = S.charAt(i);
        counts[getIdx(c)]++;
        maxCount = Math.max(maxCount, counts[getIdx(c)]);
    }
    if (maxCount > Math.floor((length + 1) / 2)) {
        return "";
    }
    const reorganizeArray = new Array(length);
    let evenIndex = 0, oddIndex = 1;
    const halfLength = Math.floor(length / 2);
    for (let i = 0; i < 26; i++) {
        const c = getAlpha('a'.charCodeAt() + i);
        while (counts[i] > 0 && counts[i] <= halfLength && oddIndex < length) {
            reorganizeArray[oddIndex] = c;
            counts[i]--;
            oddIndex += 2;
        }
        while (counts[i] > 0) {
            reorganizeArray[evenIndex] = c;
            counts[i]--;
            evenIndex += 2;
        }
    }
    return reorganizeArray.join('');
};


console.log("res", reorganizeString('aab'))
console.log("res", reorganizeString('aaab'))