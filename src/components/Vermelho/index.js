import React, { Component } from "react";
import "./vermelho.css";
import PropTypes from "prop-types";

class Vermelho extends Component {
  static contextTypes = {
    store: PropTypes.object
  };
  render() {
    return (
      <div
        className="vermelho"
        onClick={() =>
          this.context.store.dispatch({
            type: "MODAL_ABERTO",
            cor: "Vermelho"
          })
        }
      >
        Vermelho
      </div>
    );
  }
}

export default Vermelho;
