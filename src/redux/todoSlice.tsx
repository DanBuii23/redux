import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";

// Định nghĩa kiểu dữ liệu cho công việc
interface Todo {
  id: number;
  text: string;
}

// Trạng thái ban đầu
const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (_state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
      };
      state.unshift(newTodo); // Thêm vào đầu mảng thay vì push vào cuối
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Tạo Redux Thunk để tải danh sách công việc từ API giả lập
export const fetchTodos = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?");
    const data: Todo[] = await response.json();
    // Chuyển đổi dữ liệu API sang định dạng phù hợp
    const formattedData = data.map((todo) => ({
      id: todo.id,
      text: todo.title,
    }));
    dispatch(setTodos(formattedData));
  } catch (error) {
    console.error("Lỗi khi tải danh sách công việc:", error);
  }
};

// Xuất actions và reducer
export const { setTodos, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
