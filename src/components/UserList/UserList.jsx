import { useContext } from 'react';
import GithubContext from '../../context/GithubContext/GithubContext';
import './UserList.css';
import User from '../User/User';
const UserList = () => {
  const {users } = useContext(GithubContext);
  return (
    <div className='user-list'>
      {users.items.map((user) => (
        <User key={user.id} name={user.login} image={user.avatar_url} />
      ))}
      {users.total_count === 0 && <h1>not found</h1>}
    </div>
  );
};

export default UserList;
