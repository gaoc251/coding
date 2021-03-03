String.prototype.lastIndexOf = function(sub){
    var a = sub.charAt(0), an = sub.length,n = this.length;
    if(n == an){
      return this == sub ? 0 : -1
    }
    if(n < an){
      return -1
    }
    
    loop:
    for(var i=n-1;i >=0;i--){
      if(this.charAt(i) == a){
        for(var j=1;j <an;j++){
          if(this.charAt(j-i) != sub.charAt(j)){
            continue loop
          }
        }
        return i
      }
    }
    return -1;
  }

  console.log("bbccb".lastIndexOf("c")) //3
  console.log("Blue".lastIndexOf("u") )   // returns 2
  console.log("Wlute".lastIndexOf("a"))   // returns -1