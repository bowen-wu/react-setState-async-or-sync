import {Component} from 'react';

class ClassDemo extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  sync() {
    setTimeout(() => {
      this.setState({count: this.state.count + 1});
      // this.render();
      console.log('class count -> ', this.state.count);
      this.setState({count: this.state.count + 1});
      // this.render();
      console.log('class count -> ', this.state.count);
    });
  }

  async() {
    this.setState({count: this.state.count + 1});
    console.log('class count -> ', this.state.count);
    this.setState({count: this.state.count + 1});
    console.log('class count -> ', this.state.count);
  }

  asyncFunction() {
    this.setState((state) => ({...state, count: state.count + 1}));
    console.log('class count -> ', this.state.count);
    this.setState((state) => ({...state, count: state.count + 1}));
    console.log('class count -> ', this.state.count);
  }

  render() {
    console.log('class render:', this.state.count);
    return <div>
      <button onClick={() => this.sync()}>
        class {this.state.count} 同步执行
      </button>
      <button onClick={() => this.async()}>
        class {this.state.count} 异步执行
      </button>
      <button onClick={() => this.asyncFunction()}>
        class {this.state.count} 异步函数执行
      </button>
    </div>;
  }
}

export default ClassDemo;
