import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './redux'
//provider 只需用一次 全局Context 定义功能
const state = {
  head: '我是全局 head',
  body: '我是全局 body',
  headBtn: '修改 head',
  bodyBtn: '修改 body',
}

ReactDOM.render(<Provider store={state}><App /></Provider> , document.getElementById('root'));

