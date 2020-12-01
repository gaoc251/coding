/**
 * 队列
 */

function Queue (size) {
    var list = [];
    // 向队列中添加数据
    this.push = function (data) {
        if (data == null) {
            return false;
        }
        // 如果传递了size参数就设置了队列的大小
        if (size !==null && !NaN(size)) {
            if (list.length == size) {
                this.pop();
            }
        }
        list.unshift(data);
        return true;
    }

    // 从队列取出数据
    this.pop = function () {
        return list.pop()
    }

    // 返回队列的大小
    this.size = function () {
        return list.length;
    }
}

// 初始化
var queue = new Queue();
for (var i = 0; i<=5; i++) {
    queue.push(i);
}

console.log(queue.queue());
console.log(queue.pop());  //从队列中取出一个
console.log(queue.queue());