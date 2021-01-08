const functionFunction = (s) => {
    const func = (str) => {
      s += ',' + str;
      return func;
    }
    func.toString = func.valueOf = () => s;
    return func;
  }
   
  console.log(functionFunction(2)(3)(4)) // 2,3,4