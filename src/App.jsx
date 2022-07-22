import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../public/components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <ChakraProvider>
    <div id="root">
      <BrowserRouter>
        <NavBar />
        {/* <Routes><Route path="/login" element={<Login />} /></Routes> */}
      </BrowserRouter>
    </div>
    // </ChakraProvider>
  );
}

export default App;
