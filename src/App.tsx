import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function TodoListItem(item) {
  return (
    <div className="flex gap-2 bg-[#353b48ea] px-4 py-2 rounded-md mb-1">
      <input type="checkbox" />
      <div className="text-sm">
        <span>{item.task}</span>
        <span className="text-[red] flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14"
            width="14"
            viewBox="0 0 448 512"
            fill="red"
          >
            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
          </svg>
          {item.date} {item.completed}
        </span>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  let [TodoList, setTodoList] = useState([
    { task: "do work", date: "today", completed: 0 },
    { task: "do work 1", date: "today", completed: 0 },
    { task: "do work 2", date: "today", completed: 0 },
    { task: "do work 3", date: "today", completed: 0 },
  ]);

  return (
    <div className="max-w-[900px] mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold">My Day</h1>
      <h4 className="">{Date()}</h4>
      <div>
        {TodoList.map((todoelm) => (
          <TodoListItem key={todoelm.task} item={todoelm} />
        ))}

        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default App;
