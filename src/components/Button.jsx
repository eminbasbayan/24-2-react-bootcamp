import PropTypes from "prop-types";

const Button = (props) => {
  console.log("button çalıştı!");

  return <button onClick={props.onClick}>{props.children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
