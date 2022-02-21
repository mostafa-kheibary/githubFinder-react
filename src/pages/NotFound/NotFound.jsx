import Button from '../../components/Button/Button';
import notFoundVector from '../../res/image/notFound.png';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import './NotFound.css';

const NotFound = () => {
  const [num,setNum] = useState(350);
  const [duration,setDuration] = useState(10);
  const navigate = useNavigate();
  const addNum = ()=>{
    setTimeout(()=>{
      setNum(num+1);
      if(num>=398){
        setDuration(100)
      }
    },duration);
  }
  useEffect(()=>{
    if(num<404){
      addNum();
    }
  },[num]);
  const pageChange = () => {
    navigate('/');
  };
  return (
    <div className='not-found'>
      <div className='not-found__content'>
        <h2 className='not-found__status-code'>{num}</h2>
        <h4 className='not-found__title'>page not found</h4>
        <Button onClick={pageChange}>Go Home</Button>
      </div>
      <div className='not-found__image'>
        <img
          className='not-found-img'
          src={notFoundVector}
          alt='notFound picture'
        />
      </div>
    </div>
  );
};

export default NotFound;
