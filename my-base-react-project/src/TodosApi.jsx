import axios from "axios";
import Button from "./components/Button";

export const TodosApi = () => {
  let todos = [];
  const fetchTodos = () => {
    // fetch("https://jsonplaceholder.tpicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
    //   .catch(err=>{
    //     console.log("something went wrong");
    //   })

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        todos = res.data;

      })
      .catch((err) => {
        console.log("something went wrong");
      });

    console.log(todos);
    console.log("api fetch end");
  };

  return (
    <>
      <Button title="fetch todos" onClickFn={fetchTodos} />
      <br />
      <br />
      <br />
      <br />
      <ul className="list-disc">
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </>
  );
};
