import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{value}</h2>
      <input type="text" onChange={handleChange} />
      <button>Gönder</button>
    </form>
  );
};

export default Form;
