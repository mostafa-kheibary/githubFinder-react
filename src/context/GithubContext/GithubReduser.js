const GithubReduser = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        user: action.payload,
      };
    case 'CLEARUSER':
      return {
        user: [],
      };
    default:
      return state;
  }
};

export default GithubReduser;
