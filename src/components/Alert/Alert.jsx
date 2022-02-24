import './Alert.css'
import { useContext } from 'react';
import AlertContext from '../../context/AlertContext/AlertContext';
const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    <>
      {alert && (
        <div className='alert'>
          <i className='fa-solid fa-circle-exclamation alert-icon'></i>
          <h4 className='alert-text'>{alert.msg}</h4>
        </div>
      )}
    </>
  );
};

export default Alert;
