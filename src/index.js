// React: 框架的核心包
// ReactDOM: 专门做渲染相关的包
import React from 'react';
import ReactDOM from 'react-dom/client';
// 项目全局样式文件
import './index.css';
// 引入根组件
import App from './App';

// 渲染根组件App 到id为Root的dom节点
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式节点  <React.StrictMode>
  // 会影响useEffect的执行时机
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);