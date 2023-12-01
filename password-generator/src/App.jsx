import React, { useRef } from "react";
import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(),./";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(passwordGenerator, [
    length,
    numAllowed,
    charAllowed,
    passwordGenerator,
  ]);

  const copyclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="main">
        <h1>Password Generator</h1>
        <div>
          <input
            className="main-input"
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyclipboard}>Copy</button>
        </div>

        <div className="list2">
          <div>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>{length}</label>
          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Charactor</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
