import { useRef, useState } from "react";

function Counter() {
  // const [count, setCount] = useState(0);
  const countRef = useRef(0);
  //   let count = 0;

  function handleCounter() {
    // setCount(count + 1);
    // count = count + 1;
    // console.log("function scope", count);
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  //   console.log("component scope", count);
  console.log("re-rendered");

  return (
    <div>
      <p>{countRef.current}</p>
      <button onClick={handleCounter}>Arttır</button>
    </div>
  );
}

export default Counter;
