import React from "react";
import { HashRouter, Route } from "react-router-dom"; 
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

// 두 개의 중요한 props가 필요합니다. 
// 하나는 렌더링할 화면이고 다른 하나는 수행 할 URL입니다.
function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
  </HashRouter>
}

export default App;