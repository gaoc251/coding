let tree = {
	value:"A",
    children:[
        {
            value: 'B',
            children: [
                {
                    value: 'C',
                    children: []
                }
            ]
        }
    ]
}

function translateData (tree) {
   let res=''
   if (tree.value) {
     res = res + tree.value
   }
   for (var i= 0;i<tree.children.length;i++) {
    res = res + translateData(tree.children[i])
   }
   return res
}

console.log("res", translateData(tree))