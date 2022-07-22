import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../public/components/NavBar";
import Sections from "../public/components/Sections";
import { addUser, findUser, getPosts } from "../public/Api/Api";

function App() {
  const [count, setCount] = useState(0);

  // addUser(
  //   JSON.stringify({
  //     full_name: "George Sandoval",
  //     twitter_url: "https://twitter.com/condef5",
  //     linkedin_url: "https://www.linkedin.com/in/condef5/",
  //     title: "Software Engineer",
  //   })
  // );
  return (
    // <ChakraProvider>
    <div id="root">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Sections />} />
        </Routes>
      </BrowserRouter>
    </div>
    // </ChakraProvider>
  );
}

export default App;
