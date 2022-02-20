import './Button.css';
const Button = ({ children, width, height ,dark,onClick}) => {
  const style = {
    width,
    height,
  };
  return (
    <button onClick={onClick} className={`button ${dark === true && 'dark'}`} style={style}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  width: 120,
  height: 40,
};

export default Button;
