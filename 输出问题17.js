function checkAge (data) {
    if (data === {age:18}) {
        console.log("You are adult");
    } else if (data == {age:18}) {
        console.log("You are still adult");
    } else {
        console.log("hmm....You dont have an age I guess");
    }
}

checkAge({age:18})

// hmm....You dont have an age I guess

/**
 * why???
 * 原始类型用值进行比较，引用类型是内存位置，位置不同所以不相等
 */