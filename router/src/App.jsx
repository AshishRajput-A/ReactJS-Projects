import { useState } from "react";
import "./App.css";
import Header from "./Componant/Header/Header";
import Home from "./Componant/Home/Home";
import Footer from "./Componant/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
