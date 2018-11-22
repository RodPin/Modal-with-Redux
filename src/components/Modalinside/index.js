import React, { Component } from "react";
import PropTypes from "prop-types";
class ModalInside extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  componentWillMount() {
    console.log("this.props");
    console.log(this.context.store.getState().modalState.data);
  }

  render() {
    if (this.props.data.isOpen) {
      return (
        <div>
          <span>a cor clicada é {this.props.data.cor}</span>
        </div>
      );
    } else {
      return <div>yyyyyyyy</div>;
    }
  }
}

export default ModalInside;
