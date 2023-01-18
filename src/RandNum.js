import React, { Component } from "react";
import "./RandNum.css";

class RandNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: rand });
  }

  render() {
    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        <button
          onClick={this.handleClick}
          className={this.state.num === 7 ? "RandNum-hidden" : ""}
        >
          Random Number
        </button>
        <h2 className={this.state.num === 7 ? "" : "RandNum-hidden"}>
          YOU WIN!!!
        </h2>
      </div>
    );
  }
}

export default RandNum;
