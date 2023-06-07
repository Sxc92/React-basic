import './App.css';
// 1. 识别常规变量
const name = "Learn React First"

// 2. 原生JS方法调用
const getAge = () => {
  return 18
}

// react 如何完成列表渲染
// 技术方案： map
const list =[
  {id: 1, name: 'data 1'},
  {id: 2, name: 'data 2'},
  {id: 3, name: 'data 3'},
]

// 条件渲染 三元表达式、逻辑运算
const flag = true

// 1.行内样式
const style = {color: 'red', fontSize: '30'}
// 2. 类名样式 在元素绑定一个className

// 动态控制一下active类名
const avtiveFlag = true

function App() {
  return (
    <div className="App">
      {name}
      {getAge()}
      {flag?(<span>开启span</span>):<span>关闭span</span>}
      <ul>
        {list.map(item => <li>{item.name}</li>)}
      </ul>
      <span style={style}>行内样式演示</span>
      <span className='active'>类名样式演示</span>
      <br/>
      <span className={avtiveFlag? 'active':''}>动态控制类名样式演示</span>
    </div>
  );
}

export default App;
