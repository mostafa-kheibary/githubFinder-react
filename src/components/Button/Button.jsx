import './Button.css';
import { motion } from 'framer-motion';
const Button = ({ children, width, height, mode, onClick }) => {
  const style = {
    width,
    height,
  };
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`button ${mode ? mode : ''}`}
      style={style}
    >
      {children}
    </motion.button>
  );
};
Button.defaultProps = {
  mode :null,
  width: 120,
  height: 40,
};

export default Button;
