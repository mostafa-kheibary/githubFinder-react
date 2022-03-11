import { useContext, useEffect, useState } from 'react';
import GithubContext from '../../context/GithubContext/GithubContext';
import RepoItem from '../RepoItem/RepoItem';

import './RepoList.css';

const RepoList = () => {
  const [sortedRepos, setSortedRepos] = useState([]);
  const { repos } = useContext(GithubContext);

  useEffect(() => {
    const sort = repos.sort(function (a, b) {
      return b.stargazers_count - a.stargazers_count;
    });
    setSortedRepos(sort);
  },[repos]);

  return (
    <div className='repo-list'>
      <h4>Latest Repository</h4>
      <div className='repo-list__wrapper'>
        {sortedRepos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
