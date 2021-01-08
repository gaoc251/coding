/**
 * useState 有两个状态，一个是N，另一个是setN
 * setN是修改数据n的，将修改后的n存在state
 * setN修改数据后一定会触发《APP》的重新渲染
 * usestate一定会从state读取最新的n值
 */
let _state = [];
let index = 0;
function myUseState(initiaValue) {
    let currentIndex = index; // 引入中间变量currentIndex就是为了保存当前操作的下标index
    // let state = initiaValue;
    _state[currentIndex] = _state[currentIndex] === undefined?initiaValue:_state[currentIndex]
    const setState = (newValue) => {
        state[currentIndex] = newValue;
        render(); // 触发重新渲染
    }
    index= index+1
    return [ state[currentIndex] , setState]
}

// 渲染
const render = () => {
    index = 0
    ReactDom.render(<App/>, document.getElementById("root"));
}

// 使用myUseState
const App = () => {
    const [n, setN] = myUseState(0);
    return (
        <div className="App">
            <button onClick={()=>{setN(n+1)}}>n+1</button> 
        </div> 
    )
}
ReactDom.render(<App/>, document.getElementById("root"));