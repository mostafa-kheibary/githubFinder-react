import { useEffect } from 'react';
import { useContext } from 'react';
import GithubContext from '../../context/GithubContext/GithubContext';
import './UserList.css';
import User from '../User/User';
const UserList = () => {
  const { getUser, users } = useContext(GithubContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className='user-list'>
      {users.map((user) => (
        <User key={user.id} name={user.login} image={user.avatar_url} />
      ))}
    </div>
  );
};

export default UserList;
