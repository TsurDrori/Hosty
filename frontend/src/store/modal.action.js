export function updateText(msg) {
  return (dispatch, getState) => {
    const action = { type: 'SET_MSG', msg };
    dispatch(action);
  };
}
