import { useCallback, useMemo, useState } from "react";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  const [title, setTitle] = useState("Title");

  console.log("app çalıştı!");

  const changeTitleHandler = useCallback(() => {
    setTitle("Title Updated!");
  }, []);

  const listItems = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div className="app">
      <h1>{title}</h1>
      <Button onClick={changeTitleHandler}>Toggle Paragraph</Button>
      <List items={listItems} />
    </div>
  );
}

// props.onClick === props.prev.onClick

export default App;
