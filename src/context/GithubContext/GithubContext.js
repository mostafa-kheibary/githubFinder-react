import { createContext, useReducer } from 'react';
import GithubReduser from './GithubReduser';
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: [],
  };

  const [state, dispatch] = useReducer(GithubReduser, initialState);
  const baseUrl = 'https://api.github.com';

  const getUser = async () => {
    const respone = await fetch(`${baseUrl}/users`);
    const data = await respone.json();
    dispatch({
      type: 'SEARCH',
      payload: data,
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.user,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
