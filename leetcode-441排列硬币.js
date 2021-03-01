var arrangeCoins = function(n) {
    let res = 0
    for(let i=1;i<=n;i++) {
        let sum = i*(i+1)/2;
        if (sum <= n) {
            if (n - sum == i) {
                res = i
            } else if (n-sum < i) {
                return i
            }
        }
    }
    return res
};
console.log(arrangeCoins(5))
console.log(arrangeCoins(8))