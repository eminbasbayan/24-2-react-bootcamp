import { useCallback, useState } from "react";
import Button from "./components/Button";
import MyElement from "./components/MyElement";

function App() {
  const [toggleParagraph, setToggleParagraph] = useState(false);

  console.log("app çalıştı!");

  const toggleParagraphHandler = useCallback(() => {
    setToggleParagraph((prevState) => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hello</h1>
      <MyElement show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

 // props.onClick === props.prev.onClick

export default App;
