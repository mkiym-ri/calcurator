import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Row, Col} from 'react-onsenui';
import {notification} from 'onsenui';
import '../www/css/style.css';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {count:0 ,op: [],value: 0};
    this.onClickNum = this.onClickNum.bind(this);
    this.onClickPlus = this.onClickPlus.bind(this);
    this.onClickMinus = this.onClickMinus.bind(this);
    this.onClickMultiply = this.onClickMultiply.bind(this);
    this.onClickDivide = this.onClickDivide.bind(this);
    this.onClickEqual = this.onClickEqual.bind(this);
  }
  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }

  onClickNum(value){
    var s = this.state;
    s.count =  this.state.count * 10 + value;
    this.setState(s);

  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>電卓！！！！！</div>
      </Toolbar>
    );
  }
  onClickAC(){
    var s = this.state;
    s.count = 0;
    s.op = "";
    s.value = 0;
    this.setState(s);
  }

  onClickPlus(){
    var s = this.state;
    s.op = "+";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }
  onClickMinus(){
    var s = this.state;
    s.op = "-";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }
  onClickMultiply(){
    var s = this.state;
    s.op = "*";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }
  onClickDivide(){
    var s = this.state;
    s.op = "/";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }

  onClickEqual(){
    var s = this.state;
    if(s.op === "+"){
      s.count = s.value + s.count;
    }
    if(s.op === "-"){
      s.count = s.value - s.count;
    }
    if(s.op === "*"){
      s.count = s.value * s.count;
    }
    if(s.op === "/"){
      s.count = s.value / s.count;
    }
    s.op = "";
    this.setState(s);
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Row>
          <Col className="box">{this.state.count}　</Col>
        </Row>
        <Row>
          <Col className="box" width="75%"></Col>
          <Col className="box" onClick={()=>this.onClickAC()}>AC</Col>
        </Row>
        <Row>
          <Col className="box" width="25%" onClick={()=>this.onClickNum(7)}>7</Col>
          <Col className="box" width="25%" onClick={()=>this.onClickNum(8)}>8</Col>
          <Col className="box" width="25%" onClick={()=>this.onClickNum(9)}>9</Col>
          <Col className="box" width="25%" onClick={()=>this.onClickDivide()}>÷</Col>
        </Row>
        <Row>
          <Col className="box" width="25%" onClick={()=>this.onClickNum(6)}>6</Col>
          <Col className="box" width="25%" onClick={()=>this.onClickNum(5)}>5</Col>
          <Col className="box" width="25%" onClick={()=>this.onClickNum(4)}>4</Col>
          <Col className="box" width="25%" onClick={()=>this.onClickMultiply()}>×</Col>
        </Row>
        <Row>
          <Col className="box" width="25%" onClick={()=>this.onClickNum(3)}>3</Col>
          <Col className="box" width="25%" onClick={()=>this.onClickNum(2)}>2</Col>
          <Col className="box" width="25%" onClick={()=>this.onClickNum(1)}>1</Col>
          <Col className="box" width="25%" onClick={()=>this.onClickMinus()}>-</Col>
        </Row>
        <Row>
          <Col className="box" width="25%"></Col>
          <Col className="box" width="25%" onClick={()=>this.onClickNum(0)}>0</Col>
          <Col className="box" width="25%" onClick={()=>this.onClickEqual()}>=</Col>
          <Col className="box" width="25%" onClick={()=>this.onClickPlus()}>+</Col>
        </Row>
      </Page>
    );
  }
}