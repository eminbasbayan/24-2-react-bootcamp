import { useEffect, useState } from "react";

const ForwardCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-16 text-2xl bg-black inline-flex rounded-2xl">
      {counter}
    </div>
  );
};

export default ForwardCounter;
