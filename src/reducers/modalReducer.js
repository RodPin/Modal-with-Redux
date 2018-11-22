function modalReducer(state = [], action = {}) {
  console.log("modal aberto");

  if (action.type == "MODAL_FECHADO") {
    state = { isOpen: false, cor: [] };
  } else if (action.type == "MODAL_ABERTO") {
    state = { isOpen: true, cor: action.cor };
    console.log(state);
  }
  return state;
}

export default modalReducer;
