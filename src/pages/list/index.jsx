import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTodos, deleteTodo } from "../../hooks/useTodo";

function List() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: todos,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const { mutate } = useMutation({
    mutationFn: async(id) => {
      await deleteTodo(id);
    },
    onSuccess: async() => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}> List of Todo </h1>

      <Link to={"/create"} className="btn btn-success mb-3">
        Create
      </Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td>
              <td>{todo.title}</td>
              <td>
                <div className="btn-group">
                  <Link to={`/edit/${todo.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      mutate(todo.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
