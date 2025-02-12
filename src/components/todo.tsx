import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { addTodo, removeTodo, fetchTodos } from "../redux/todoSlice";

const TodoList: React.FC = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos()); // Gọi API khi component mount
  }, [dispatch]);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAddTodo}>Thêm</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between my-1">
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
