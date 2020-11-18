// 排列硬币
var arrangeCoins = function (n) {
    let i = 1
    if (n == 0) return 0
    while (n > 0) {
      n = n - i
      i++  // 下一层需要的***数
      if (n < i) return i - 1 // 不够返回上一层的***数 == 层数
    }
  };

  console.log("排列硬币", arrangeCoins(5))