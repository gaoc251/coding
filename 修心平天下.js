/**
 * 给定一个数组，要求将数组中所有为0的元素移动到数组的最后，其他元素顺序不变
 * 输入：[1,2,0,5,0,6,8,9,0,5,2,0,4]
 * 输出：[1,2,5,6,8,9,5,2,4,0,0,0,0]
 */
function change(nums) {
   var j = 0;
   for (var i =0;i<nums.length;i++) {
       if (nums[i] != 0) {
           nums[j] = nums[i];
           if (i != j) {
               nums[i] = 0
           }
           j++
       }
   }
   return nums
}

console.log("res1", change([1,2,0,5,0,6,8,9,0,5,2,0,4]))


/**
 * 已知document.write('<a href="'+filterA(a) + '"onclick="' + filterB(B) + '"></a>' + filterC(C) + '</a>')，请实现fiterA, filterB, filterC确保不存在安全漏洞
 */




/**
 * 请用vue或者react实现一个input框功能
 * a 输入框默认提示 “请输入内容”
 * b 输入框内最多只能输入20个字符长度内容，当超出长度提示“超出长度的限制”
 * c 当光标离开输入框后，弹出对话框输入内容
 */




/**
 * 给定一个切图，请实现他的html结构和具体样式（手机端屏幕）
 * 要求：
 * a 左右留白边距48像素，上下留白32像素
 * b 文字区域和图片区域间距32像素，并且两端对齐
 * c 图片大小227 * 152 ，圆角12
 * d 文字部分标题 32像素 #222 最多展示两行，超出省略号
 * e 文字描述部分24 #cacaca 最多显示1行，超出省略号
 * f 文字部分标题和描述，垂直两端对齐，文字部分整体高度等于图片高度
 */




/**
 * 下面这段代码实现了对列表的事件绑定，并且点击列表每个元素之后，会弹出alert对话框，内容是当前元素的展示内容；请指出下面这段代码的问题，并且给出优化后的代码
 * <ul class="content">
 *  <li class="item1">item1</li>
 *  <li class="item2">item2</li>
 *  <li class="item3">item3</li>
 *  <li class="item4">item4</li>
 *  <li class="item5">item5</li>
 * </ul>
 */

//  var element = document.getElementsByTagName('li');
//  for (var i = 0;i<element.length; i++) {
//      element[i].onclick = function () {
//         alert(element[li].innerHTML)
//      }
//  }


/**
 * 以下代码会产生孤儿还是僵尸进程，分别危害是什么
 */
// master.js
// const fork = require('child_process').fork;
// const server = require('net').createServer();
// server.listen(3000)
// const worker = fork('worker.js')

// worker.send('server', server)
// console.log('worker process created, pid %s ppid %s', worker.pid, proces.pid)
// process.traceDeprecation(0)


// // worker.js
// const http = require('http')
// const server = http.createServer((req,res) => {
//     res.send('i am worker, pid:' + process.id + ',ppid: '+ process.ppid)
// })