import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full  h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-blue-400 px-3 py-2 rounded-xl">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1  text-white  rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-1  text-white  rounded-full"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 py-1  text-white  rounded-full"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>

          <button
            onClick={() => setcolor("pink")}
            className="outline-none px-4 py-1  text-white  rounded-full"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>

          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-1  text-white  rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>

          <button
            onClick={() => setcolor("orange")}
            className="outline-none px-4 py-1  text-white  rounded-full"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>

          <button
            onClick={() => setcolor("brown")}
            className="outline-none px-4 py-1  text-white  rounded-full"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
