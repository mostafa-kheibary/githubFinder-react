import { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';
const AlerContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const initilasState = null;
  const [state, dispatch] = useReducer(AlertReducer, initilasState);

  const showAlert = (msg) => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: { msg },
    });
    setTimeout(() => dispatch({ type: 'REMOVE' }), 3000);
  };

  return (
    <AlerContext.Provider
      value={{
        showAlert,
        alert: state,
      }}
    >
      {children}
    </AlerContext.Provider>
  );
};

export default AlerContext;