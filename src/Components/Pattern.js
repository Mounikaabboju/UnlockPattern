import React, { Component } from "react";
import PatternLock from "react-pattern-lock";
import "../Css/pattern.css";

class Pattern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      done: false,
      selectedPattern: []
    };
    this.recordPattern = this.recordPattern.bind(this);
    this.checkPattern = this.checkPattern.bind(this);
    this.reset = this.reset.bind(this);
    this.renderText = this.renderText.bind(this);
  }

  recordPattern(pattern) {
    return new Promise((resolve, reject) => {
      if (pattern.length < 3) {
        reject();
      } else {
        this.setState({ selectedPattern: pattern });
        resolve();
      }
    });
  }
  checkPattern(pattern) {
    this.setState({ isLoading: true });
    return new Promise((resolve, reject) => {
      if (pattern.join("-") === this.state.selectedPattern.join("-")) {
        resolve();
        this.setState({ done: true });
      } else {
        reject();
        this.setState({ error: true });
      }
    });
  }
  reset() {
    this.setState({ done: false, error: false, selectedPattern: [] });
  }

  renderText() {
    if (this.state.error) {
      return <div style={{ color: "red" }}>Wrong Pattern</div>;
    } else return <div>Draw your pattern</div>;
  }

  render() {
    if (!this.state.selectedPattern.length)
      return (
        <div>
          Choose your pattern (you must connect 3 points at least)
          <PatternLock
            width={400}
            pointSize={10}
            pointActiveSize={40}
            size={3}
            onChange={this.recordPattern.bind(this)}
          />
        </div>
      );
    return this.state.done ? (
      <div>
        <h1>Success</h1>
        <h3>
          Click{" "}
          <span
            style={{ color: "lightblue", cursor: "pointer" }}
            onClick={this.reset.bind(this)}
          >
            here
          </span>{" "}
          to reset.
        </h3>
      </div>
    ) : (
      <div>
        {this.renderText()}
        <PatternLock
          width={400}
          size={3}
          pointSize={10}
          pointActiveSize={40}
          onChange={this.checkPattern.bind(this)}
        />
      </div>
    );
  }
}
export default Pattern;
