/**
 * javascript都是以单线程的方式运行在浏览器的javascript引擎中。
 * settimeout和setInterval的作用只是把你要执行的代码在你设定的时间点插入js引擎维护的队列中，插入代码队列并不意味着你的代码会立即执行。
 */

setTimeout(fn(), 200) // 告诉浏览器200ms后我会插入一段代码到你的队列中
setInterval(fn(), 200) // 每隔200ms执行一次
