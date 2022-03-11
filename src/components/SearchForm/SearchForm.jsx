import Button from '../Button/Button';
import { useState, useContext } from 'react';
import { searchUser } from '../../context/Actions/Actions';
import GithubContext from '../../context/GithubContext/GithubContext';
import AlerContext from '../../context/AlertContext/AlertContext';
import Alert from '../Alert/Alert';
import './SearchForm.css';

const SearchForm = () => {
  const [text, setText] = useState('');
  const { dispatch, searchResualt } = useContext(GithubContext);
  const { showAlert } = useContext(AlerContext);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      // set search resualt
      dispatch({ type: 'SET_LOADER' });
      const data = await searchUser(text);
      dispatch({ type: 'SET_LOADER' });
      dispatch({ type: 'SEARCH', payload: data });

    } else {
      showAlert('Please wright somthing');
    }
    setText('');
  };
  return (
    <div
      className={`search-form-body ${
        searchResualt.items.length > 0 && 'active'
      }`}
    >
      <Alert />
      <form onSubmit={handleSubmit} className={`search-form`}>
        <input
          placeholder='search evrybody in github'
          className='search-input'
          value={text}
          type='text'
          onChange={handleText}
        />
        <div className='button-container'>
          <Button height={'100%'} width={'100%'} mode={'dark'}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
