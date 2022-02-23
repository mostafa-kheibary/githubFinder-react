import { createContext, useReducer } from 'react';
import GithubReduser from './GithubReduser';
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: [],
  };

  const [state, dispatch] = useReducer(GithubReduser, initialState);
  const baseUrl = 'https://api.github.com';

  const searchUser = async (search) => {
    const respone = await fetch(`${baseUrl}/search/users?q=${search}`);
    const data = await respone.json();
    dispatch({
      type: 'SEARCH',
      payload: data.items,
    });
  };

  const clearUser = ()=>{
    dispatch({
      type:"CLEARUSER",
    })
  }
  return (
    <GithubContext.Provider
      value={{
        users: state.user,
        searchUser,
        clearUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
