
function test (n) {
    for(let i=n;i>0;i--) {
        setTimeout(function() {
            console.log(i)
        }, 1000*(n-i))
    }
}

test(10)