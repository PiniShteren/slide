import React, { useState } from 'react';
import "./App.css";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import ProductView from "./component/ProductView/ProductView";
import Content from "./component/Content/Content";
import About from './component/About/About';
import Footer from "./component/Footer/Footer";

import data from "./component/data/doors.json";
const dataArr = data.catalog;

function App() {
  const [scroll, setScroll] = useState(0);
  const [i, setI] = useState(0);
  const openProduct = (index) => {
    setI(index);
  }
  const sendScroll = (scrolling) => {
    setScroll(scrolling);
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="body">
          <Switch>
            <Route exact path="/" component={() => {
              return <Home scroll={scroll} sendScroll={sendScroll} openProduct={openProduct} />
            }} />
            <Route path="/productView" component={() => {
              return <ProductView dataArr={dataArr[i]} />
            }} />
            <Route path="/content" component={() => {
              return <Content />
            }} />
            <Route path="/about" component={() => {
              return <About />
            }} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}
export default App;