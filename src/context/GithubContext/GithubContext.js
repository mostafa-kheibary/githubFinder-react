import { createContext, useReducer } from 'react';
import GithubReduser from './GithubReducer';
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    searchResualt: { items: [] },
    user: {},
    repos:[],
    loader: false,
  };

  const [state, dispatch] = useReducer(GithubReduser, initialState);
  
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
