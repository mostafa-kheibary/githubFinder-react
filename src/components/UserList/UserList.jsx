import { useEffect, useState } from 'react';
import './UserList.css';
import User from '../User/User';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const baseUrl = 'https://api.github.com';

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const respone = await fetch(`${baseUrl}/users`);
    const data = await respone.json();
    setUsers(data);
  };
  return (
    <div className='user-list'>
      {users.map((user) => (
        <User key={user.id} name={user.login} image={user.avatar_url} />
      ))}
    </div>
  );
};

export default UserList;
