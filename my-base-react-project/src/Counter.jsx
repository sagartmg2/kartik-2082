import { Fragment, useState } from "react";

/* 
    function useState(initalValue){
        const modifier() =>{
            can change initalValue   
        }
        return [  initalvalue, modifier  ]
    }
*/

const Counter = () => {
  const [count, setCount] = useState(100); // [ 100 ,modifierFunction]

  const increment = () => {
    // setCount(++count);  // ERROR: we must not chnge state value directly.
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

    console.log("incrmeented.....", count);
  };

  const decrement = () => {
    // setCount(--count); // ERROR: we must not change state value directly
    setCount(count - 1);
    console.log("decrement.....", count);
  };

  const reset = () => {
    setCount(0);
  };

  console.log("counter component rendered.");
  return (
    <>
      <p className="mb-8 text-2xl">Counter:{count}</p>

      <div className="flex gap-4">
        <button
          onClick={increment}
          className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer"
        >
          add
        </button>
        <button
          onClick={reset}
          className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer"
        >
          Reset
        </button>
        <button
          onClick={decrement}
          className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer"
        >
          minus
        </button>
      </div>
    </>
  );
};

export default Counter;
