import { useState } from "react";
import type { ChangeEvent } from 'react';
import { Button, Container, List, ListItem, ListItemButton, ListItemText, TextField, } from '@mui/material'
import Stack from '@mui/material/Stack';

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
        <Container fixed>
          <Stack>
            <TextField value={value} onChange={handleChange} />
            <button type="button" onClick={addTodo}>追加</button>
            <List>
              <ul>
                {text.map((value, i) => {
                  return (
                    <li key={i}>{value}</li>)
                })}
              </ul>
            </List>
          </Stack>
        </Container>
      </form>
    </div>
  );
};

export default App;
