import Button from '../Button/Button';
import { useState, useContext } from 'react';
import GithubContext from '../../context/GithubContext/GithubContext';
import './SearchForm.css';

const SearchForm = () => {
  const [text, setText] = useState('');
  const { searchUser, users } = useContext(GithubContext);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      searchUser(text);
    }
    setText('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`search-form ${users.length > 0 === true && 'active'}`}
    >
      <input
        placeholder='search evrybody in github'
        className='search-input'
        value={text}
        type='text'
        onChange={handleText}
      />
      <Button height={45} width={140} dark={true}>
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
