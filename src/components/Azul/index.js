import React, { Component } from "react";
import "./azul.css";
import PropTypes from "prop-types";
class Azul extends Component {
  static contextTypes = {
    store: PropTypes.object
  };
  render() {
    return (
      <div
        className="azul"
        onClick={() =>
          this.context.store.dispatch({
            type: "MODAL_ABERTO",
            cor: "Azul"
          })
        }
      >
        Azul
      </div>
    );
  }
}

export default Azul;
