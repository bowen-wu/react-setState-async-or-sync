import {Fragment, useState} from 'react';

function FunctionDemo() {
  const [count, setCount] = useState(0);
  console.log('function render -> ', count);

  function sync() {
    Promise.resolve().then(() => {
      setCount((a) => a + 1);
      // 闭包的值
      console.log('function count -> ', count);
      setCount((a) => a + 1);
      // 闭包的值
      console.log('function count -> ', count);
    });
  }

  function async() {
    setCount((a) => a + 1);
    console.log('function count -> ', count);
    setCount((a) => a + 1);
    console.log('function count -> ', count);
  }

  return (<Fragment>
    <button onClick={sync}>
      function {count} 同步执行
    </button>
    <button onClick={async}>
      function {count} 异步执行
    </button>
  </Fragment>);
}

export default FunctionDemo;
