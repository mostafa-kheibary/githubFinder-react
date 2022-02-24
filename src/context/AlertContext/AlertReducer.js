const AlertReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return action.payload;
    case 'REMOVE':
      return null;
    default:
      return state;
  }
};

export default AlertReducer;