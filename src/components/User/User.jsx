import './User.css';
const User = () => {
  return (
    <div className='user'>
      <div className='user__top'></div>
      <div className='user__down'>
        <img className='user-image' src='' alt='' />
        <h4 className='user-name'>Mostafa Kheibary</h4>
        <div className='user__navigate'>
          <p className='user__navigate-text'>Read More</p>
          <button className='user-button'>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default User;
