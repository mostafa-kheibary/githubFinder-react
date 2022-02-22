import { useEffect } from 'react';
const UserList = () => {
  const baseUrl = 'https://api.github.com';

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const respone = await fetch(baseUrl);
    const data = await respone.json();
    console.log(data);
  };
  return <div>UserList</div>;
};

export default UserList;
