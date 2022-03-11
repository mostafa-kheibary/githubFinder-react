import './Alert.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import AlertContext from '../../context/AlertContext/AlertContext';
const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    <div className='alert-container'>
      {alert && (
        <motion.div
          initial={{ y: '20px' }}
          animate={{ y: 0 }}
          className='alert'
        >
          <i className='fa-solid fa-circle-exclamation alert-icon'></i>
          <h4 className='alert-text'>{alert.msg}</h4>
        </motion.div>
      )}
    </div>
  );
};

export default Alert;
