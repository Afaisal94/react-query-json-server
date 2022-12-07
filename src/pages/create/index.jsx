import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../../hooks/useTodo";

function Create() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");

  const handleSubmit = async(event) => {
    event.preventDefault();
    await createTodo({title});
    navigate("/list");
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}> Create Todo</h1>

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

export default Create;
