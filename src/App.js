import React from "react";
import PropTypes from "prop-types";

/* 
function component는 function이고 return을 통해 screen에 표시
class component는 class이고 react component로 부터 확장되고 screen에 표시
react는 자동적으로 class component의 render method를 실행한다.
*/
class App extends React.Component{
  // state는 object이다.
  // state에는 바꾸고 싶은 data를 넣는다.
  state = {
    count: 0
  };
  add = () => {
    console.log("add")
  };
  minus = () => {
    console.log("minus")
  };

  /*
  button에는 onClick이라는 prop이 기본적으로 있다.
  this.add()에서 ()는 즉시 함수를 호출해라는 것이고,
  this.add는 click했을 때만 함수를 호출하는 것이다.
  */
  render(){
    return (
    <div>
      <h1>The Number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
      );
  }
}

export default App;