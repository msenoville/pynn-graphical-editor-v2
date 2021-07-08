import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';
import reportWebVitals from './reportWebVitals';
 
const sayHello = () => {
  alert('Hello from JCG!');
}
 
ReactDOM.render(
  <React.StrictMode>
    <div className='center-content'>
      <Button onClick={sayHello} shadow="true" type="info"
border="round" size="small">Hello!</Button>
      <Button onClick={sayHello} type="danger" border="round"
size="small">Hello!</Button>
      <Button onClick={sayHello} shadow="true" type="info"
border="outline" size="large">Hello!</Button>
      <Button onClick={sayHello} type="danger" border="no-outline"
size="large">Hello!</Button>
      <Button onClick={sayHello} shadow="true" type="success"
border="round">Hello!</Button>
      <Button onClick={sayHello} type="info"
border="round">Hello!</Button>
 
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
 
// If you want your app to work offline and 
// load faster, you can change
// unregister() to register() below. 
// Note this comes with some pitfalls.
// Learn more about service workers:
// https://bit.ly/CRA-PWA
reportWebVitals();