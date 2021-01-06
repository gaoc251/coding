var name = '000'

function test() {
    var name = "11111";
    var person = {
        name: "222",
        pro: {
            name: "3333",
            getName1: function () {
                return this.name;
            },
            getName2: () => this.name
        }
    };
    console.log(person.pro.getName1()); 
    console.log(person.pro.getName2()); 
    const getName = person.pro.getName1
    console.log(getName()) 
}
test();


async function async1() {
    console.log('a') 
    await async2() 
    console.log('b')
}
async function async2() {
    console.log('c')
}

console.log('d') 
setTimeout(function () {
    console.log('e')
}, 0) 
async1() 
new Promise(function (resolve) {
    console.log('f') 
    resolve()
}).then(function () {
    console.log('g')
})
console.log('h')

d h e a c b f g
简单请求 & 复杂请求
304



// 算法：数组合并展开（写的太慢了，用了半个多小时）
// 输入：[['a','b'],['n','m'],['0','1']]
// 输出：['an0','an1','am0','am1','bn0','bn1','bm0','bm1'] 
function test (arr) {
    let res = []
    for (var i = 0; i<arr[0].length;i++) {
        let obj = ''
        for(var j = 0;j<arr.length;j++) {
            obj = obj + arr[j][Math.random()*arr[0].length]
        }
        res.push(obj)
    }
}


const aa = "123451111111133333333"

function  test (aa) {
    let obj = {}
    let max = 0;
    let key = ''
    for (var i = 0; i< aa.length; i++) {
        let temp = aa[i];
        if (obj[temp] == undefined) {
            obj[temp] = 1
        } else {
            obj[temp]++;
            if (max<=obj[temp]) {
                max = obj[temp];
                key = temp
            }
        }
    }
    return [key , max]
}
console.log("test", test(aa))
