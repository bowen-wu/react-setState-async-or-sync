## React setState 异步同步

1. 在 setTimeout、Promise 等原生事件 API 调用中
    - setState 和 useState 是**同步执行**的，立即执行 render
        - Class Component 能获取到最新值 => this.state => **引用类型**
        - Function Component 不能获取到最新值 => 只能得到之前的值 => **闭包**
    - 多次执行 setState 和 useState，每一次执行都会调用一次 render
2. 在 React 合成事件中
    - setState 和 useState 是**异步执行**的，不会立即执行 render，都不能立即获取到更新后的值
    - 多次执行 setState 和 useState，只会调用一次 render
    - setState 可能会进行 state 合并
        - 传入一个对象，会进行 state 合并 => +1
        - 传入一个函数，则不会进行 state 合并 => +2
    - useState 不会进行 state 合并
