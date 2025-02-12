import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../redux/todoSlice";
import { RootState, AppDispatch } from "../redux/store";

const TodoList = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<AppDispatch>();

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
        className="p-2 border-white mr-1"
      />
      <button onClick={handleAddTodo}>Thêm</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
