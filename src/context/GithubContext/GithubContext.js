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
    console.log(data);
    dispatch({
      type: 'SEARCH',
      payload: data.items,
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.user,
        searchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
