function sqrtBisection(n) {
    if (isNaN(n)) return NaN;
    if (n === 0 || n === 1) return n;
    var low = 0,
        high = n,
        pivot = (low + high) / 2,
        lastPivot = pivot;
    // do while 保证执行一次
    do {
        if (Math.pow(pivot, 2) > n) {
            high = pivot;
        } else if (Math.pow(pivot, 2) < n) {
            low = pivot;
        } else {
            return pivot;
        }
        lastPivot = pivot;
        pivot = (low + high) / 2;
    }
    while (Math.abs(pivot - lastPivot) >= Number.EPSILON)

    return pivot;
}

console.log("res", sqrtBisection(8))
