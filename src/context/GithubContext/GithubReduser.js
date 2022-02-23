const GithubReduser = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default GithubReduser;
