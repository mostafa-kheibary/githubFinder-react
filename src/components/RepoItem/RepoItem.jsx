import './RepoItem.css';
const RepoItem = ({
  repo: {
    name,
    description,
    watchers_count,
    stargazers_count,
    open_issues_count,
    forks_count,
    html_url,
    language,
  },
}) => {
  return (
    <div className='repo-item'>
      <a href={html_url} className='repo-item-name'>
        {name}
      </a>
      <p className='repo-item-description'>{description}</p>
      <div className='repo-item__info'>
        <span className='repo-item__info-tag watcher'>
          <i className='fa-solid fa-eye'></i>
          <span>{watchers_count}</span>
        </span>
        <span className='repo-item__info-tag star'>
          <i className='fa-solid fa-star'></i>
          <span>{stargazers_count}</span>
        </span>
        <span className='repo-item__info-tag issus'>
          <i className='fa-solid fa-exclamation'></i>
          <span>{open_issues_count}</span>
        </span>
        <span className='repo-item__info-tag fork'>
          <i className='fa-solid fa-code-fork'></i>
          <span>{forks_count}</span>
        </span>
      </div>
      <span className='repo-item-language'>{language}</span>
    </div>
  );
};

export default RepoItem;
