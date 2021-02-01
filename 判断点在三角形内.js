// function pointInTriangle(x1, y1, x2, y2, x3, y3, x0, y0) {
//     var divisor = (y2 - y3)*(x1 - x3) + (x3 - x2)*(y1 - y3);
//         var a = ((y2 - y3)*(x0 - x3) + (x3 - x2)*(y0 - y3)) / divisor;
//         var b = ((y3 - y1)*(x0 - x3) + (x1 - x3)*(y0 - y3)) / divisor;
//         var c = 1 - a - b;

//         return a >= 0 && a <= 1 && b >= 0 && b <= 1 && c >= 0 && c <= 1;
// }


function pointInTriangle(x1, y1, x2, y2, x3, y3, x, y) {
    var u = ((x-x1)*(y2-y1)-(y-y1)*(x2-x1))/((x3-x1)*(y2-y1)-(y3-y1)*(x2-x1));
    var v = ((x-x1)*(y3-y1)-(y-y1)*(x3-x1))/((x2-x1)*(y3-y1)-(y2-y1)*(x3-x1));
    var n = 1 - u - v;

        return u >= 0 && u <= 1 && v >= 0 && v <= 1 && n >= 0 && n <= 1;
}

console.log("res", pointInTriangle(-1,0,1.5,3.5,2.73,-3.12,2333.33,2333333.33))
console.log("res", pointInTriangle(-1,0,1.5,3.5,2.73,-3.12,1.23,0.23))


