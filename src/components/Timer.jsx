import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Yüklendikten Sonra");
  }, []);

  useEffect(() => {
    console.log("Güncellendikten Sonra");
  }, [seconds]);

  useEffect(() => {
    return () => console.log("DOM'dan Kaldırıldığında");
  }, []);

  return (
    <div>
      <p className="text-black">Seconds: {seconds} </p>
      <button onClick={() => setSeconds(seconds + 1)}>Arttır</button>
    </div>
  );
};

export default Timer;
