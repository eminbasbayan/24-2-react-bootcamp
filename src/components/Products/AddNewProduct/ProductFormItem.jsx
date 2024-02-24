import PropTypes from "prop-types";

const ProductFormItem = (props) => {
  return (
    <div className="form-item">
      <label className="inline-flex flex-col">
        <strong className="text-black !text-[#ccc]">{props.title}</strong>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="p-1 rounded"
          name={props.name}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

export default ProductFormItem;

ProductFormItem.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
