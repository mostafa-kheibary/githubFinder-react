import Button from '../Button/Button';
import { useState, useContext } from 'react';
import GithubContext from '../../context/GithubContext/GithubContext';
import AlerContext from '../../context/AlertContext/AlertContext';
import Alert from '../Alert/Alert';
import './SearchForm.css';

const SearchForm = () => {
  const [text, setText] = useState('');
  const { searchUser, searchResualt } = useContext(GithubContext);
  const { showAlert } = useContext(AlerContext);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      searchUser(text);
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
          <Button height={45} width={140} mode={'dark'}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
