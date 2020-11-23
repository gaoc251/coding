(
    ()=>{
        let x, y;
        try {
            throw new Error();
        } catch (x) {
            (x=1), (y=2);
            console.log(x)
        }
        console.log(x);
        console.log(y);
    }
)();

// 1 undefined 2

// x 属于catch的作用域，在catch块外，x还是undefined。y是2