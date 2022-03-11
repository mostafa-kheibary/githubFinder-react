import Button from '../Button/Button';
import { useContext } from 'react';
import GithubContext from '../../context/GithubContext/GithubContext';
import './ClearAll.css';
const ClearAll = () => {
  const { dispatch, searchResualt } = useContext(GithubContext);
  const clearUser = ()=>{
    dispatch({type:'CLEAR_USER'})
  }
  return (
    <div className='clear-status'>
      {searchResualt.items.length > 0 && (
        <Button onClick={clearUser}>ClearAll</Button>
      )}
    </div>
  );
};

export default ClearAll;
