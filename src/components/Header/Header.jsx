import './Header.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const changePage = () => {
    navigate('./about');
  };
  return (
    <header className='header'>
      <div className='header__logo'>
        <i className='fa-brands fa-github-alt header-logo'></i>
      </div>
      <div className='header__nav'>
        <Button onClick={changePage}>About</Button>
      </div>
    </header>
  );
};

export default Header;
