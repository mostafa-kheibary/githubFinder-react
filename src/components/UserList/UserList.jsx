import { useContext } from 'react';
import GithubContext from '../../context/GithubContext/GithubContext';
import './UserList.css';
import User from '../User/User';
const UserList = () => {
  const { searchResualt, loader } = useContext(GithubContext);

  const renderdList = searchResualt.items.map((user) => (
    <User key={user.id} name={user.login} image={user.avatar_url} />
  ));

  return (
    <div className='user-list'>
      {loader === true ? 'loading ... ' : renderdList}
      {searchResualt.total_count === 0 && <h1>not found</h1>}
    </div>
  );
};

export default UserList;
