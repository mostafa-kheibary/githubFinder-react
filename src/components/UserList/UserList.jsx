import { useContext } from 'react';
import GithubContext from '../../context/GithubContext/GithubContext';
import Loader from '../../components/Loader/Loader';
import './UserList.css';
import User from '../User/User';
const UserList = () => {
  const { searchResualt, loader } = useContext(GithubContext);

  const renderdList = searchResualt.items.map((user) => (
    <User key={user.id} name={user.login} image={user.avatar_url} />
  ));

  return (
    <div className='user-list'>
      {loader === true ? <Loader /> : renderdList}
      {searchResualt.total_count === 0 && <h4 className='no-resault'>noting found</h4>}
    </div>
  );
};

export default UserList;
