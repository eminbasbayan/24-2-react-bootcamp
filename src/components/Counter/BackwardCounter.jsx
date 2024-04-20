import useCounter from "../../hooks/Counter";

const BackwardCounter = () => {
  const counter = useCounter(false);

  return (
    <div className="p-16 text-2xl bg-black inline-flex rounded-2xl">
      {counter}
    </div>
  );
};

export default BackwardCounter;
