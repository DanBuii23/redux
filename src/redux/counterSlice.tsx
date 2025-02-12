import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo state ban đầu
const initialState = {
  count: 0,
};

// Tạo slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Xuất action để dùng trong component
export const { increment, decrement } = counterSlice.actions;

// Xuất reducer để cấu hình store
export default counterSlice.reducer;
