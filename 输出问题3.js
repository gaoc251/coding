const shape = {
    radius: 10,
    diameter () {
        return this.radius*2
    },
    perimeter: () => 2*Math.PI*this.radius
}

shape.diameter()
shape.perimete()

// 20 NAN

/**
 * 讲解：
 * diameter是一个普通函数，perimeter是箭头函数
 * 箭头函数this指向上下文，指向定义时的位置（window）
 */