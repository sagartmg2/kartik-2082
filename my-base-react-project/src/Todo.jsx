import { useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState(["one"]);
  const [showModal, setShowModal] = useState(false);

  const addNewItem = (e) => {
    e.preventDefault();
    console.log();
    let newTodo = e.target.title.value;
    let newTodoStatus = e.target.status.checked;
    console.log(newTodoStatus);
    console.log({ newTodo });

    // let newTodos = todos  // ["one" ] // THIS will point to the actual reference of orginal todos variable
    // newTodos.push(newTodo)
    // setTodos(newTodos);

    let newTodos = [...todos]; // [one]
    newTodos.push(newTodo); // [one, two]
    setTodos(newTodos);
  };

  const editItem = () => {};
  return (
    <>
      <form className="flex items-center gap-4" onSubmit={addNewItem}>
        <input type="checkbox" className="text-4xl h-8 w-8" name="status" />
        <input className="border py-4 px-8" placeholder="title" name="title" />
        <button className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer">
          submit
        </button>
      </form>
      <br />
      <div>{JSON.stringify(todos)}</div>
      <br />
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((el) => {
            return (
              <tr>
                <td>{el}</td>
                <td>yes</td>
                <td>
                  <button className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer">
                    edit
                  </button>
                  &nbsp;
                  <button className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer">
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showModal && (
        <div className="  bg-[rgba(0,0,0,0.7)] fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center ">
          <form
            className="flex flex-col items-start gap-4 bg-white p-8"
            onSubmit={editItem}
          >
            <p className="text-2xl">Edit Todo</p>
            <div>
              <label htmlFor="status">status</label>{" "}
              <input
                type="checkbox"
                id="status"
                className="text-4xl h-8 w-8"
                name="status"
              />
            </div>
            <div>
              <input
                className="border py-4 px-8"
                placeholder="title"
                name="title"
              />
            </div>
            <button className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer">
              submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};
