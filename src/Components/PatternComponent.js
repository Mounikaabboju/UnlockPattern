import React, { Component } from "react";
import PatternLock from "react-pattern-lock";
import "../Css/pattern.css";

class PatternComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="pattern">
        <PatternLock
          width={300}
          pointSize={10}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
export default PatternComponent;
