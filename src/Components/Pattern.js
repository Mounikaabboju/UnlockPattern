import React, { Component } from "react";
import "../Css/pattern.css";
import PatternLock from "react-pattern-lock";
import { connect } from "react-redux";
import {
  record,
  checkTrue,
  checkError
} from "../ReduxComponents/patternActions";
import Reset from "./Reset";

class Pattern extends Component {
  recordPattern = pattern => {
    return new Promise((resolve, reject) => {
      if (pattern.length < 3) {
        reject();
      } else {
        console.log(pattern);
        this.props.dispatch(record(pattern));
        resolve();
      }
    });
  };
  checkPattern = pattern => {
    /* this.setState({ isLoading: true }); */
    return new Promise((resolve, reject) => {
      if (
        pattern.join("-") ===
        this.props.PatternReducer.selectedPattern.join("-")
      ) {
        resolve();
        this.props.dispatch(checkTrue());
      } else {
        reject();
        this.props.dispatch(checkError());
      }
    });
  };

  renderText = () => {
    if (this.props.PatternReducer.error) {
      return <div style={{ color: "red" }}>Wrong Pattern</div>;
    } else
      return (
        <div>
          <h2>Confirm your pattern</h2>
        </div>
      );
  };

  render() {
    console.log("Checking Done Prop" + this.props.PatternReducer.done);
    if (!this.props.PatternReducer.selectedPattern.length)
      return (
        <div className="screen1">
          <h2>Choose your pattern</h2>
          <PatternLock
            width={300}
            pointSize={10}
            onChange={this.recordPattern}
          />
        </div>
      );
    return this.props.PatternReducer.done ? (
      <div>
        <h1>Success</h1>
        <Reset />
      </div>
    ) : (
      <div className="screen2">
        {this.renderText()}
        <PatternLock width={300} pointSize={10} onChange={this.checkPattern} />
        <Reset />
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps)(Pattern);
