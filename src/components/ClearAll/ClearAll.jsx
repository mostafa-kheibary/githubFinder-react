import Button from '../Button/Button';
import { useContext } from 'react';
import GithubContext from '../../context/GithubContext/GithubContext';
import './ClearAll.css';
const ClearAll = () => {
  const { clearUser, users } = useContext(GithubContext);
  return (
    <div className='clear-status'>
      {users.items.length > 0 && <Button onClick={clearUser}>ClearAll</Button>}
    </div>
  );
};

export default ClearAll;
