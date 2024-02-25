import PropTypes from "prop-types";

const ErrorModal = (props) => {
  if (!props.isShowError) {
    return;
  }

  return (
    <div className="error-modal">
      <div className="flex justify-center items-center h-screen">
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
    </div>
  );
};

export default ErrorModal;

ErrorModal.propTypes = {
  isShowError: PropTypes.bool,
  setIsShowError: PropTypes.func,
  message: PropTypes.string,
};
