
import React, { useContext } from "react";
import TodosContext from "../ContextApis/TodosContext";

export default function Todos() {
  let { todos } = useContext(TodosContext);

  return (
    <>
      <h1 className="mt-3 text-center">To-Do Table v-1</h1>
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {todos ? (
            todos.map((todo) => (
              <tr key={todo.id}>
                <th scope="row">{todo.id}</th>
                <td>{todo.title}</td>
                <td>
                  {todo.completed ? (
                    <span className="badge bg-success">Completed</span>
                  ) : (
                    <span className="badge bg-warning">Pending</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center mt-3">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
