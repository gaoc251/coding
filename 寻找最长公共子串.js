function findLongestCommonStr(s1, s2) {
    var commonStr = '', L1 = s1.length, L2 = s2.length;
    // 比较s1,s2的长度，看谁长谁短
    var shortStr = L1>L2 ? s2 : s1;
    var longStr = L1>L2 ? s1 : s2;
    // 短的字符串的长度
    var strLen = shortStr.length;

    // 遍历短的字符串，从大到小递减
    for (let j = strLen; j > 0; j--) {
        // 不同的长度有总共有i个可能，从左到右遍历
        for (let i = 0; i <= strLen - j; i++) {
            // 截取出短字符串的部分字符串
            commonStr = shortStr.substr(i, j);
            // 为了便于观测运行的过程，打印看一下会直观很多
            // console.log('commonStr:',commonStr,'i:',i,'j:',j);

            // 放在长字符串里看看有没有匹配的，如果有直接返回
            if (longStr.indexOf(commonStr) >= 0) return commonStr
        }
    }
    // 没有的话返回空字符串
    return ''
};

console.log("res1",findLongestCommonStr("qwer--", "qtrrwqw-")); //qw



function LCS(str1, str2){
    var maxLen = 0;
    var index = 0;

    var arr = new Array();
    for (var i = 0; i <= str1.length + 1; i++) {
        arr[i] = new Array();
        for (var j = 0; j <= str2.length + 1; j++) {
            arr[i][j] = 0;
        }
    }

    for(var i = 0; i <= str1.length; i++){
        for(var j = 0; j <= str2.length; j++){
            if(i == 0 || j == 0){
                arr[i][j] = 0
            }else{
                if (str1[i] == str2[j] && str1[i - 1] == str2[j - 1]) {
                    arr[i][j] = arr[i - 1][j - 1] + 1;
                }else{
                    arr[i][j] = 0;
                }
            }
            if(arr[i][j] > maxLen){
                maxLen = arr[i][j];
                index = i;
            }
        }
    }

    var str = "";
    if(maxLen == 0){
        return "";
    }else{
        for(var k = index - maxLen; k < maxLen; k++){
            str += str1[k];
        }
        return str;
    }
}
var str1="abcdefg";
var str2="xyzabcd";
console.log("lcs",LCS(str1, str2)  )   // abcd



function longestCommonSubsequence(wordX, wordY) {
    let m = wordX.length;
    let n = wordY.length;
    let solution = [];
    //初始化一个二维数组，长度宽度分别为两个字符串的长度+1,内容为动态规划当前两分串的最长公共
    for (let i = 0; i <= m; ++i) {
      solution[i] = []; //{1}
      for (let j = 0; j <= n; ++j) {
        solution[i][j] = ""; //{2}
      }
    }
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (wordX[i - 1] == wordY[j - 1]) {
          //因为字母长度少一位，我们二维数组从1，1开始用
          //如果正好相同取左上方+1
          //仅有这种情况的时候才会根据对角线添加一个字符
          solution[i][j] = solution[i-1][j-1] + wordX[i-1]; //{3}
        } else {
          //如果不同分情况取左或上复制过来
          let a = solution[i - 1][j].length;
          let b = solution[i][j - 1].length;
          solution[i][j] = a > b ? solution[i-1][j] : solution[i][j - 1]; //{4}
        }
      }
    }
    console.log(solution[m][n])
    return solution[m][n].length;
  }
  console.log(longestCommonSubsequence("1A2C3D4B56","B1D23CA45B6A"));