import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [BGcolor, setBGcolor] = useState(0);
  function changeBG(e) {
    // e.preventDefault();
    setBGcolor(e.target.innerText);
    // console.log(e.target.innerText)
  }

  useEffect(() => {
    document.body.style.backgroundColor = BGcolor;
  },[BGcolor]);

  return (
    <>
      <h2 className="text-3xl m-3 text-center font-mono">
        Hello Manoj | Welcome to react
      </h2>
      <div className="flex justify-between">
        <div className="flex flex-col w-[200px] gap-3 h-[90vh] p-3 justify-around">
          <button
            className="text-3xl font-bold rounded-2xl bg-green-400 p-3  "
            onClick={changeBG}
          >
            green
          </button>
          <button
            className="text-3xl font-bold rounded-2xl bg-red-400 p-3 "
            onClick={changeBG}
          >
            red
          </button>
          <button
            className="text-3xl font-bold rounded-2xl bg-blue-400 p-3 "
            onClick={changeBG}
          >
            blue
          </button>
        </div>
        <div className="flex flex-col w-[200px] gap-3 h-[90vh] p-3 justify-around">
          <button
            className="text-3xl font-bold rounded-2xl bg-violet-400 p-3  "
            onClick={changeBG}
          >
            violet
          </button>
          <button
            className="text-3xl font-bold rounded-2xl bg-pink-400 p-3 "
            onClick={changeBG}
          >
            pink
          </button>
          <button
            className="text-3xl font-bold rounded-2xl bg-orange-400 p-3 "
            onClick={changeBG}
          >
            orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
