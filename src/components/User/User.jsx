import './User.css';
import { Link } from 'react-router-dom';
const User = ({ name, image }) => {
  return (
    <div className='user'>
      <div className='user__top'>
        <img className='banner' src={image} alt='' />
      </div>
      <div className='user__down'>
        <img className='user-image' src={image} alt='' />
        <h4 className='user-name'>{name}</h4>
        <div className='user__navigate'>
          <p className='user__navigate-text'>Read More</p>
          <Link className='user-button' to={`user/${name}`}>
            {'>'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
