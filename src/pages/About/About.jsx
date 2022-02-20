import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import './About.css';
const About = () => {
  const navigate = useNavigate();
  const changePage = () => {
    navigate('/');
  };
  return (
    <div className='about-container'>
      <h1 className='about-title'>Github finder</h1>
      <h4 className='about-author'>Mostafa Kheibary</h4>
      <p className='about-info'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elpor et mattis
        pharetra. Penatibus purus habitant pharetra molestie. Tortor quis sed
        senectus scelerisque neque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elpor et mattis pharetra. Penatibus purus habitant pharetra
        molestie. Tortor quis sed senectus scelerisque neque
      </p>
      <div className='about-social'>
        <a className='about-social__link' href='https://linkedin.com/in/mostafa-kheibary'>
          <i className='fa-brands fa-linkedin about-social__icon'></i>
        </a>
        <a className='about-social__link' href='https://github.com/mostafa-kheibary'>
          <i className='fa-brands fa-github about-social__icon'></i>
        </a>
      </div>
      <div className='about-button-page'>
        <Button onClick={changePage}>back to Home</Button>
      </div>
    </div>
  );
};
export default About;
