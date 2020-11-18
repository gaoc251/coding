/**
 * 1111有效括号嵌套深度
 */

var maxDepthAfterSplit = function(seq) {
    let dep = 0;
    return seq.split("").map((value, index) => {
        if (value === '(') {
            ++dep;
            console.log(value, dep)
            return dep % 2;
        } else if (value == ')'){
            let ans = dep % 2;
            --dep;
            console.log(value, dep)
            return ans;
        }
    });
};

console.log("res", maxDepthAfterSplit('(()())'))  // [0,1,1,1,1,0]
// console.log("res", maxDepthAfterSplit('()(())()')) // [0,0,0,1,1,0,1,1]