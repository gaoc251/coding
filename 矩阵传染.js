var p = [
    [3, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 3, 3],
    [2, 3, 3, 2, 1]
] 
function isvalid(i,j, target) {
    if (i<0||i>3||j<0||j>4) {
        return 0
    }
    if (p[i][j] == target){
        return 0;
    }
    return 1;
}

function adjacentNumber(i, j, k, target) {
    if (isvalid(i-1, j, target)) {
        if (p[i-1][j] == k) {
            p[i-1][j] = target
            adjacentNumber(i-1,j,k, target)
        } 
    }
    if (isvalid(i+1, j, target)) {
        if (p[i+1][j] == k) {
            p[i+1][j] = target;
            adjacentNumber(i+1,j,k, target)
        }
    }
    if (isvalid(i, j-1, target)) {
        if (p[i][j-1] == k) {
            p[i][j-1] = target;
            adjacentNumber(i,j-1,k, target)
        }
    }
    if (isvalid(i, j+1, target)) {
        if (p[i][j+1] == k) {
            p[i][j+1] = target;
            adjacentNumber(i,j+1,k, target)
        }
    }
}
// X，Y, source， target
adjacentNumber(2,2,3,2)
console.log("p", p)