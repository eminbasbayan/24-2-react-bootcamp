import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const { danger, success, iconName, onClick, children } = props;
  return (
    <button
      className={`${danger ? "danger" : ""} ${success ? "success" : ""}`}
      onClick={onClick}
    >
      {iconName && <i className={`bi bi-${iconName}`}></i>}
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  iconName: PropTypes.string,
};
