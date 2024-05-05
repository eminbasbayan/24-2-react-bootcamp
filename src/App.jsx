import { useCallback, useState } from "react";
import Button from "./components/Button";
import MyElement from "./components/MyElement";

function App() {
  const [toggleParagraph, setToggleParagraph] = useState(false);
  const [toggleAllow, setToggleAllow] = useState(false);

  console.log("app çalıştı!");

  const toggleParagraphHandler = useCallback(() => {
    if (toggleAllow) {
      setToggleParagraph((prevState) => !prevState);
    }
  }, [toggleAllow]);

  const toggleAllowHandler = useCallback(() => {
    setToggleAllow(true);
  }, []);

  return (
    <div className="app">
      <h1>Hello</h1>
      <MyElement show={toggleParagraph} />
      <Button onClick={toggleAllowHandler}>Toggle Allow</Button>
      <br />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

// props.onClick === props.prev.onClick

export default App;
