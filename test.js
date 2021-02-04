var p = [
    [1, 1, 5, 5, 1],
    [5, 5, 5, 1, 1],
    [1, 1, 5, 5, 1],
    [1, 1, 5, 1, 1],
    [5, 1, 1, 1, 5]
] 
var q = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
function isvalid(i,j) {
    if (i<0||i>4||j<0||j>4) {
        return 0
    }
    if (q[i][j] == 1){
        return 0;
    }
    return 1;
}

function adjacentNumber(i, j, k, s) {
    let a;
    q[i][j] = 1;
    if (isvalid(i-1, j)) {
        if (p[i-1][j] == k) {
            s++;
            q[i-1][j] = 1;
            adjacentNumber(i-1,j,k,s)
        }
    }
    if (isvalid(i+1, j)) {
        if (p[i+1][j] == k) {
            s++;
            q[i+1][j] = 1;
            adjacentNumber(i+1,j,k,s)
        }
    }
    if (isvalid(i, j-1)) {
        if (p[i][j-1] == k) {
            s++;
            q[i][j-1] = 1;
            adjacentNumber(i,j-1,k,s)
        }
    }
    if (isvalid(i, j+1)) {
        if (p[i][j+1] == k) {
            s++;
            q[i][j+1] = 1;
            adjacentNumber(i,j+1,k,s)
        }
    }
}

function main () {
    let s=0
    let i, j
    adjacentNumber(1,2,5,s)
    console.log("q", q)
    console.log("p", p)
}

main()