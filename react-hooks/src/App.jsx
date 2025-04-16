import { useEffect, useRef, useState } from "react";
import "./App.css";
import { useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*(){}:<>?~_+-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [number, character, length, setPassword, length]); // for optimization

  useEffect(() => {
    passwordGenerator();
  }, [number, character, length, setPassword, length]); // for every change of state

  const copyToClibboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(6, 9);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-[600px] mx-auto  rounded-lg px-4 m-5 h-50 text-orange-500 bg-gray-700">
        <h1 className="text-3xl text-center text-white mt-6">
          Pasword Generator
        </h1>
        <div className="flex justify-center rounded-lg overflow-hidden m-4">
          <input
            type="text"
            placeholder="   password"
            value={password}
            readOnly
            className="bg-white px-1 py-3  rounded-l-2xl w-[80%] text-2xl"
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-r-2xl px-4 text-2xl py-0.5 outline-none shrink-0"
            onClick={copyToClibboard}
          >
            copy
          </button>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label
              className="text-2xl mr-3 cursor-pointer"
              onClick={() => {
                setLength((prev) => prev + 1); 
              }}
            >
              length: {length}
            </label>
            <input
              type="checkbox"
              defaultChecked={number}
              defaultValue={false}
              className="text-2xl "
              onChange={() => {
                setNumber((pre) => !pre);
              }}
            />
            <label className="text-2xl mr-3">Number</label>
            <input
              type="checkbox"
              defaultChecked={character}
              defaultValue={false}
              className="text-2xl"
              onChange={() => {
                setCharacter((pre) => !pre);
              }}
            />
            <label className="text-2xl">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
