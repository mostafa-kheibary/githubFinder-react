const GithubReduser = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchResualt: action.payload };
    case 'CLEARUSER':
      return { ...state, searchResualt: { items: [] } };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LOADER':
      return { ...state, loader: !state.loader };
    default:
      return state;
  }
};

export default GithubReduser;
