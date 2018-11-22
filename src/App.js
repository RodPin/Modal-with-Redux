import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

import Vermelho from "./components/Vermelho";
import Azul from "./components/Azul";
import Modal from "./components/Modal";
import ModalInside from "./components/Modalinside";

class App extends Component {
  static contextTypes = {
    store: PropTypes.object
  };
  constructor() {
    super();
    this.state = {
      data: [],
      isShowing: false
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };
  componentWillMount() {
    this.context.store.subscribe(() => {
      console.log("this.context.store.getState().modalState.isOpen");
      console.log(this.context.store.getState().modalState.isOpen);
      this.setState({
        isShowing: this.context.store.getState().modalState.isOpen
      });
    });
  }
  _render() {
    return (
      <div className="App">
        <div>
          Clique em uma das cores para ver um modal com a cor que voce clicou:
        </div>

        <div> </div>
        <Azul />
        <Vermelho />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.isShowing ? (
          <div onClick={this.closeModalHandler} className="back-drop">
            {this._render()}
          </div>
        ) : (
          this._render()
        )}
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
        >
          <ModalInside data={this.context.store.getState().modalState} />
        </Modal>
      </div>
    );
  }
}
export default App;
