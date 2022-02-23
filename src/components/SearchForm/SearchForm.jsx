import Button from '../Button/Button';
import { useState } from 'react';
import './SearchForm.css';

const SearchForm = () => {
  const [text, setText] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className='search-form'>
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
