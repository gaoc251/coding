function throttle (fn) {
    let canrun = true;
    return function (){
        if (!canrun) return
        canrun = false
        setTimeout(function() {fn.apply(this, arguments), canrun=true}, 500)
    }
}