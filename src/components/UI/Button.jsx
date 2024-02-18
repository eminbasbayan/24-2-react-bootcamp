import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  return (
    <button
      className={`${props.danger && "danger"} ${props.success && "success"}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  danger: PropTypes.string,
  success: PropTypes.string,
};
