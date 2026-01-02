import { useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState([
    { title: "one", status: false },
    { title: "two", status: false },
    { title: "three", status: true },
  ]);

  const [editableTodoIndex, setEditableTodoIndex] = useState(null);

  const addNewItem = (e) => {
    e.preventDefault();
    console.log();
    let newTodo = e.target.title.value;

    // todos.push() // ERROR: cannot change state directly.
    // let newTodos = todos  // ["one" ] // THIS will point to the actual reference of orginal todos variable
    // newTodos.push(newTodo)
    // setTodos(newTodos);

    let newTodos = [...todos]; // [one]
    newTodos.push({ title: newTodo, status: false }); // [one, two]
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((el, idx) => index != idx));
  };

  const editTodo = (index) => {
    setEditableTodoIndex(index);
  };

  const editItem = (e) => {
    e.preventDefault();

    let existingTodos = [...todos];
    existingTodos[editableTodoIndex].status = e.target.status.checked;
    existingTodos[editableTodoIndex].title = e.target.title.value;

    setTodos(existingTodos);
    setEditableTodoIndex(null);
  };

  return (
    <>
      <form className="flex items-center gap-4" onSubmit={addNewItem}>
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
          {todos.map((el, index) => {
            return (
            <tr key={index}>
                <td>{el.title}</td>
                <td>{el.status ? "Yes" : "No"}</td>
                <td>
                  <button
                    onClick={() => {
                      editTodo(index);
                    }}
                    className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer"
                  >
                    edit
                  </button>
                  &nbsp;
                  <button
                    onClick={() => {
                      deleteTodo(index);
                    }}
                    className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer"
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {editableTodoIndex != null && (
        <div
          className="  bg-[rgba(0,0,0,0.7)] fixed inset-0 flex justify-center items-center "
          onClick={() => {
            setEditableTodoIndex(null);
          }}
        >
          <form
            onClick={(e) => {
              e.stopPropagation();
            }}
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
                // checked={todos[editableTodoIndex].status}
                defaultChecked={todos[editableTodoIndex].status}
              />
            </div>
            <div>
              <input
                className="border py-4 px-8"
                placeholder="title"
                name="title"
                defaultValue={todos[editableTodoIndex].title}
                // value={todos[editableTodoIndex].title}
                // value = "new tiem"
                // onChange={changeTodo}
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
