const Button = ({ children, width, height }) => {
  const style = {
    width,
    height,
  };
  return (
    <button className='button' style={style}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  width: 120,
  height: 40,
};

export default Button;
