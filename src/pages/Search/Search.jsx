import { useState } from "react";
import Button from '../../components/Button/Button';
import './Search.css';
const Search = () => {
  const [text,setText] = useState('')
  const handleText = (e)=>{
    setText(e.target.value);
  }
  return (
    <div className='container'>
      <form className="search-form"> 
        <input placeholder="search evrybody in github" className="search-input" value={text} type="text" onChange={handleText}/>
        <Button height={45} width={140} dark={true}>Search</Button>
      </form>
    </div>
  );
};
export default Search;