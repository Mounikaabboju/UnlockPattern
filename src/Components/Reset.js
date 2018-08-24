import React, { Component } from "react";
import { connect } from "react-redux";
import { reset } from "../ReduxComponents/patternActions";

class Reset extends Component {
  reset = () => {
    this.props.dispatch(reset());
  };
  render() {
    return (
      <div>
        <h3>
          Click{" "}
          <span
            style={{ color: "lightblue", cursor: "pointer" }}
            onClick={this.reset}
          >
            here
          </span>{" "}
          to reset.
        </h3>
      </div>
    );
  }
}
export default connect()(Reset);
