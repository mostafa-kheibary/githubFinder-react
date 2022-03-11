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
        github finder app create using React, context and reducer for state
        managing.
        if you want to collaborate in this project and expend it you can fork it.
      </p>
      <div className='about-social'>
        <a
          className='about-social__link'
          href='https://linkedin.com/in/mostafa-kheibary'
        >
          <i className='fa-brands fa-linkedin about-social__icon'></i>
        </a>
        <a
          className='about-social__link'
          href='https://github.com/mostafa-kheibary'
        >
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
