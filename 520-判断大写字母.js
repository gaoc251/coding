/**
 * 给定一个单词，你需要判断单词的大写使用是否正确。

我们定义，在以下情况时，单词的大写用法是正确的：

全部字母都是大写，比如"USA"。
单词中所有字母都不是大写，比如"leetcode"。
如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
否则，我们定义这个单词没有正确使用大写字母。

示例 1:

输入: "USA"
输出: True
示例 2:

输入: "FlaG"
输出: False
 */

// 大写字母A =65 小写字母a = 97
var detectCapitalUse = function(word) {
    if (word == null) return false;
    let one = word[0];
    if (one.charCodeAt()>=97) {
        for(var i=1;i<word.length;i++) {
            if (word[i].charCodeAt() < 97) {
                return false;
            }
        }
    } else {
        for(var i=1;i<word.length-1;i++) {
            if ((word[i].charCodeAt()>=97 && word[i+1].charCodeAt()<97)||((word[i].charCodeAt()<97 && word[i+1].charCodeAt()>=97))) {
                return false
            }
        }
    }
    return true;
};

console.log("检测大写字母", detectCapitalUse("USA"))
console.log("检测大写字母", detectCapitalUse("FlaG"))
console.log("检测大写字母", detectCapitalUse("USA"))
console.log("检测大写字母", detectCapitalUse("g"))
console.log("检测大写字母", detectCapitalUse("Usa"))
console.log("检测大写字母",detectCapitalUse("FFFFFFFFFFFFFFFFFFFFf"))