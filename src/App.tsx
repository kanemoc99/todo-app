import { useState } from "react";
import type { ChangeEvent } from 'react';


const App = () => {

  type Todo = {
    value: String,
    text: String,
    key: number;
  };
  const [value, setValue] = useState("");
  const [text, setText] = useState<String[]>([]);

  const addTodo = () => {
    text.push(value)
    setValue("");
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <div className="App">
      <form>
        <input type="text" value={value} onChange={handleChange} />
        <button type="button" onClick={addTodo}>追加</button>
        <ul>
          {text.map((value, i) => {
            return (
              <li key={i}>{value}</li>)
          })}
        </ul>
      </form>
    </div>
  );
};

export default App;
