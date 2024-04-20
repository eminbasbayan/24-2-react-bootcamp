import useCounter from "../../hooks/Counter";

const ForwardCounter = () => {
  const counter = useCounter();

  return (
    <div className="p-16 text-2xl bg-black inline-flex rounded-2xl">
      {counter}
    </div>
  );
};

export default ForwardCounter;
