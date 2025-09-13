import { useState } from "react";

export function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

// RULE OF THUMB: Never call a state setter directly during render  
export function Count() {
  const [count, setCount] = useState(0);

  setCount(count + 1);

  return <h1>{count}</h1>;
}

export function Name() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handlelastName(e) {
    setLastName(e.target.value);
  }

  const fullName = firstName + ' ' + lastName;

  return (
    <>
      <Input label="First name: " value={firstName} onChange={handleFirstName} />
      <Input label="Last name: " value={lastName} onChange={handlelastName}/>
      <h1>{fullName}</h1>
    </>
  )
}

function Input({ label, value, onChange }) {

  return (
    <label>
      {label}
      {''}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  )
}
