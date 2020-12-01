// let list: number[] = [1,2,3];
// let list1: Array<number> = [1, 2, 3];
// let x: [string, number];
// x= ['ddd', 1];

enum Color {Red=3, Green, Blue};
let c:Color = Color.Green;
console.log("res", c)

function warnUser(): void {
    console.log("sssss")
}
let unusable: void = undefined

function error(message: string):never {
    throw new Error(message);
}

function fail() {
    return error(("ddd"));  
}

declare function create(o: object | null):void ;
create({prop: 0});
create(null);
create(42);
create('seee');
create(false);
create(undefined);


// 断言
let someValue: any = "this is a string";
// let strlength: number = (<string>someValue).length;
let strLength:number = (someValue as string).length;


// 变量声明
function f(input: boolean) {
    let a = 100;
    if(input){
        let b = a+1;
        return b
    }
    return blur;
}

try {
    throw "oh, no";
} catch (e) {
    console.log("oh, well")
}

let {a,b}:{a:string, b:string}= o;

