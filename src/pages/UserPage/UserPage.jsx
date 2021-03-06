import { useParams, Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import GithubContext from '../../context/GithubContext/GithubContext';
import { getUser } from '../../context/Actions/Actions';
import RepoList from '../../components/RepoList/RepoList';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import './UserPage.css';

const UserPage = () => {
  const { dispatch, user, loader } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    const handleGetUser = async () => {
      dispatch({ type: 'SET_LOADER' });
      const data = await getUser(params.userName);
      dispatch({ type: 'SET_USER', payload: data.user });
      dispatch({ type: 'SET_REPO', payload: data.repo });
      dispatch({ type: 'SET_LOADER' });
    };
    handleGetUser();
  }, [params.userName]);

  const goToGitHub = (url) => {
    window.location.replace(url);
  };

  const renderdUser = (
    <div className='user-page__container'>
      <div className='user-page__container-info'>
        <div className='user-page__image'>
          <img className='user-page__image-img' src={user.avatar_url} alt='' />
          <span className='user-page__type'>{user.type}</span>
        </div>
        <div className='user-page__user-info'>
          <h2 className='user-page__user-info__name'>{user.name}</h2>
          <p className='user-page__user-info__bio'>{user.bio}</p>
          <Button
            width={180}
            onClick={() => goToGitHub(user.html_url)}
            mode='trans'
          >
            Go To Profile
          </Button>
          <div className='user-page__links'>
            <div>
              <span className='user-page__links-lable'>Location :</span>
              <h4>{user.location ? user.location : 'internet'}</h4>
            </div>
            <div>
              <span className='user-page__links-lable'>blog :</span>
              <h4>{user.blog ? user.blog : 'none'}</h4>
            </div>
            <div>
              <span className='user-page__links-lable'>twitter :</span>
              <h4>{user.twitter_username ? user.twitter_username : 'none'}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='user-page__fallower-info'>
        <div className='user-page__fallower-info__content'>
          <div>
            <span className='fallower-info__content-span'>followers</span>
            <h4 className='fallower-info__content-number'>{user.followers}</h4>
          </div>
          <div className='icon'>
            <i className='fa-solid fa-users'></i>
          </div>
        </div>

        <div className='user-page__fallower-info__content'>
          <div>
            <span className='fallower-info__content-span'>following</span>
            <h4 className='fallower-info__content-number'>{user.following}</h4>
          </div>
          <div className='icon'>
            <i className='fa-solid fa-user-group'></i>
          </div>
        </div>

        <div className='user-page__fallower-info__content'>
          <div>
            <span className='fallower-info__content-span'>
              public repository
            </span>
            <h4 className='fallower-info__content-number'>
              {user.public_repos}
            </h4>
          </div>
          <div className='icon'>
            <i className='fa-solid fa-file-code'></i>
          </div>
        </div>

        <div className='user-page__fallower-info__content'>
          <div>
            <span className='fallower-info__content-span'>Gists</span>
            <h4 className='fallower-info__content-number'>
              {user.public_gists}
            </h4>
          </div>
          <div className='icon'>
            <i className='fa-solid fa-shop'></i>
          </div>
        </div>
      </div>
      <RepoList />
    </div>
  );
  return (
    <>
      <Link className='user-page__back-home' to='/'>
        back to Home
      </Link>
      {loader === true ? <Loader /> : renderdUser}
    </>
  );
};

export default UserPage;
