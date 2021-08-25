import { tsExpressionWithTypeArguments } from "@babel/types";
import React from "react";

/* 
function component는 function이고 return을 통해 screen에 표시
class component는 class이고 react component로 부터 확장되고 screen에 표시
react는 자동적으로 class component의 render method를 실행한다.
*/
class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("constructor")
  }

  // state는 object이다.
  // state에는 바꾸고 싶은 data를 넣는다.
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1}))
  };

  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated")
  }
  componentWillUnmount() {
    console.log("Good bye Cruel world")
  }
  /*
  button에는 onClick이라는 prop이 기본적으로 있다.
  this.add()에서 ()는 즉시 함수를 호출해라는 것이고,
  this.add는 click했을 때만 함수를 호출하는 것이다.
  */
  render(){
    console.log("I`m rendering")
    return (
    <div>
      <h1>The Number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
      );
  }
}

/*
Component Life Cycle
※ Mounting - component의 태어남
  constructor()
    -JavaScript에서 class를 만들 때 호출되는 것
    -coponent가 mount될 때 호출됨
  componentDidMount()
    -component가 처음 render될 때 호출됨

※ Updating
  componentDidUpdate()
    -componet가 업데이트될 때 호출됨

※ Unmounting - coponent가 죽는 것
  componentWillUnmount()
    -component가 떠날 때 호출됨

setState()를 호출 => component를 호출 => render를 호출
=> 업데이트 완료 후 coponentDidUpdate() 실행
*/
export default App;