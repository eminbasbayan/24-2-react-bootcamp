import PropTypes from "prop-types";
import { useRef } from "react";
import ReactDom from "react-dom";

const ErrorModal = (props) => {
  const inputRef = useRef();
  const buttonRef = useRef();

  if (!props.isShowError) {
    return;
  }

  function handleClick() {
    console.log(inputRef.current.placeholder);
    console.log(inputRef.current.type);
    console.log(inputRef.current.value);
    console.log(inputRef);
    inputRef.current.focus();
  }

  return ReactDom.createPortal(
    <div className="error-modal">
      <div className="flex justify-center items-center h-screen absolute">
        <div>
          <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => props.setIsShowError(false)}
            ></div>
            <div className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
              <div className="bg-indigo-500 text-white px-4 py-2 flex justify-between">
                <h2 className="text-lg font-semibold">Modal Title</h2>
              </div>
              <div className="p-4 text-black">
                <p>{props.message}</p>
                <input
                  type="text"
                  defaultValue={"Emin"}
                  placeholder="Lütfen Adınızı Giriniz!"
                  className="text-white"
                  ref={inputRef}
                />
                <button
                  className="text-white mt-10"
                  onClick={handleClick}
                  ref={buttonRef}
                >
                  Input`a Focuslan!
                  <span>Deneme</span>
                </button>
              </div>
              <div className="border-t px-4 py-2 flex justify-end">
                <button
                  className="px-3 py-1 bg-indigo-500 text-white  rounded-md w-full sm:w-auto"
                  onClick={() => props.setIsShowError(false)}
                >
                  Kapat{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ErrorModal;

ErrorModal.propTypes = {
  isShowError: PropTypes.bool,
  setIsShowError: PropTypes.func,
  message: PropTypes.string,
};
