import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
import { RootState, AppDispatch } from "../redux/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Số hiện tại: {count}</h1>
      <button onClick={() => dispatch(increment())}>Cộng</button>
      <button onClick={() => dispatch(decrement())}>Trừ</button>
    </div>
  );
};

export default Counter;
