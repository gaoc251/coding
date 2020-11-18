var jsonData = [{
        id: 3,
        parent: 2
    },
    {
        id: 1,
        parent: null
    },
    {
        id: 2,
        parent: 1
    },
]

function transData(data, idStr, pidStr, chindrenStr) {
    var arr = [],
        hash = {},
        id = idStr,
        pid = pidStr,
        children = chindrenStr;

    for (var i = 0; i < data.length; i++) {
        console.log("data[i][id]",data[i][id])
        hash[data[i][id]] = data[i];
    }
    for (var j = 0; j < data.length; j++) {
        //data 中每一项
        var arrVal = data[j],
            //找父分类
            hashVP = hash[arrVal[pid]];
        //pid 不为 0
        if (hashVP) {
            !hashVP[children] && (hashVP[children] = []);
            hashVP[children].push(arrVal);
        }
        //pid 为 0
        else {
            // 将data 的对象添加到数组中
            arr.push(arrVal);
        }
    }
    return arr;
}

var jsonDataTree = transData(jsonData, 'id', 'parent', 'chindren');
console.log("res", JSON.stringify(jsonDataTree));