import { createContext, useReducer } from 'react';
import GithubReduser from './GithubReducer';
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    searchResualt: { items: [] },
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReduser, initialState);
  const baseUrl = 'https://api.github.com';

  const searchUser = async (search) => {
    const respone = await fetch(`${baseUrl}/search/users?q=${search}`);
    const data = await respone.json();
    dispatch({
      type: 'SEARCH',
      payload: data,
    });
  };

  const getUser = async (userName) => {
    const respone = await fetch(`${baseUrl}/users/${userName}`);
    const data = await respone.json();
    console.log(data);
    dispatch({
      type: 'SET_USER',
      payload: data,
    });
  };
  const clearUser = () => {
    dispatch({
      type: 'CLEARUSER',
    });
  };
  return (
    <GithubContext.Provider
      value={{
        searchResualt: state.searchResualt,
        searchUser,
        clearUser,
        getUser,
        user: state.user,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
