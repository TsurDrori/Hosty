const initialState = {
  currModalShown: '',
  msg: null,
};

export function modalReducer(state = initialState, action) {
  let newState = state;

  switch (action.type) {
    case 'MODAL_TOGGLE':
      newState = { ...state, currModalShown: { ...action.currModalShown } };
      break;
    case 'SET_MSG':
      newState = { ...state, msg: action.msg };
      break;
  }

  return newState;
}
