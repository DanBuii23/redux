import "./App.css";
import Counter from "./components/counter";
import TodoList from "./components/todo";

function App() {
  return (
    <>
      <div>
        <h1>Bộ đếm số</h1>
        <Counter />
        <hr className="my-5"></hr>
        <h1>Việc cần làm</h1>
        <TodoList />
      </div>
    </>
  );
}

export default App;
