import { useState } from "react";
import Counter from "./Components/Counter/Counter";
const initialState = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
];
function App() {
  const [state, setState] = useState(initialState);
  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      {state.map((s) => (
        <Counter id={s.id} key={s.id} count={s.count} />
      ))}
    </div>
  );
}

export default App;
