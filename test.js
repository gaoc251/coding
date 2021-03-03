function test (str) {
    let stack = [];
    let res = [];
    for (let i=0;i<str.length;i++) {
        if (str[i] == '('){
            stack.push(i);
        }
        if (str[i] == ')') {
            if(stack.length == 0) {
                console.log("抛出Exception");
                return false
            }
            res.push(str.substring(stack[stack.length-1]+1,i))
            stack.pop()
        }    
    }
    if (stack.length != 0){
        console.log("抛出Exception")
    } else {
        return res
    }
}
console.log("res", test("(1+1)*2"))
console.log("res", test("((1+2)*(3+4))+2"))
console.log("res", test(")*(3+4))+2"))