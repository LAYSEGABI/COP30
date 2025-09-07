import "./App.css";
import React, { useState } from "react";
import Home from "./pages/Home.jsx";


function App() {
 const [lang, setLang] = useState("pt"); // idioma inicial

  return (
    <>
      <Home lang={lang} setLang={setLang}/>
    </>
  );
}

export default App;
