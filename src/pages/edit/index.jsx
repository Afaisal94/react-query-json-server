import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTodoById, updateTodo } from "../../hooks/useTodo";

function Edit() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [title, setTitle] = useState("");

  const { isLoading, isError, data:todo, error } = useQuery({
    queryKey: ['todos', id],
    queryFn: async () => await getTodoById(id)    
  })

  useEffect(() => {
    if(todo){
        setTitle(todo.title)
    }
  }, [todo]);

  const handleSubmit = async(event) => {
    event.preventDefault();
    await updateTodo({id, title});
    navigate("/list");
  }; 
  

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}> Edit Todo</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </div>
  );
}

export default Edit;
