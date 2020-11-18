const bird = {
    size: 'small'
}

const mouse = {
    name: 'Mickey',
    small: true
}

console.log("A", mouse.bird.size) // false
console.log("B", mouse[bird.size]) // true
console.log("C", mouse[bird["size"]]) // 
console.log("D", "All of them are valid")

/**
 * 讲解：
 * mouse没有bird的key
 */