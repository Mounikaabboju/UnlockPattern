import React, { Component } from "react";
import "../Css/pattern.css";
import { connect } from "react-redux";
import {
  record,
  checkTrue,
  checkError
} from "../ReduxComponents/patternActions";
import Reset from "./Reset";
import PatternComponent from "./PatternComponent";

class Pattern extends Component {
  recordPattern = pattern => {
    return new Promise((resolve, reject) => {
      console.log("I am inside record patt");
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
    return new Promise((resolve, reject) => {
      if (
        pattern.join("-") ===
        this.props.PatternReducer.selectedPattern.join("-")
      ) {
        this.props.dispatch(checkTrue());
        resolve();
      } else {
        this.props.dispatch(checkError());
        reject();
      }
    });
  };

  renderText = () => {
    if (this.props.PatternReducer.error) {
      return <div className="error">Patterns don't match</div>;
    } else
      return (
        <div>
          <h2>Draw the pattern again to confirm it</h2>
        </div>
      );
  };

  render() {
    //console.log("Checking Done Prop" + this.props.PatternReducer.done);
    if (!this.props.PatternReducer.selectedPattern.length)
      return (
        <div className="screen1">
          <h2 className="h2">Draw your unlock pattern</h2>
          <PatternComponent onChange={this.recordPattern} />
        </div>
      );
    return this.props.PatternReducer.done ? (
      <div className="screen3">
        <h1>Success</h1>
        <Reset />
      </div>
    ) : (
      <div className="screen2">
        {this.renderText()}
        <PatternComponent onChange={this.checkPattern} />
        <Reset />
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps)(Pattern);
