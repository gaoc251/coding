class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor
    }

    constructor ({newColor = 'green'}={}) {
        this.newColor = newColor
    }
}
const freddie = new Chameleon({newColor='purple'})
freddie.colorChange("orange")

// colorChange是静态方法，不能传递