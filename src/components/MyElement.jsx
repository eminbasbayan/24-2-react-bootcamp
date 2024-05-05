import React from "react";
import PropTypes from "prop-types";
import MyParagraph from "./MyParagraph";

const MyElement = (props) => {
  console.log("my element çalıştı!");

  return <MyParagraph> {props.show && "My Paragraph"} </MyParagraph>;
};

MyElement.propTypes = {
  show: PropTypes.bool,
};

const MemoizedMyElement = React.memo(MyElement)

export default MemoizedMyElement;
