import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";

import Layout from "./components/Layout";
function App() {
  // const [count, setCount] = useState(0)
  const [userInput, setUserInput] = useState("");

  const [smallText, setSmallText] = useState("Created by Adarsh Kunwar");
  const [bigText, setBigText] = useState("Zen Writing");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setUserInput(bigText + "\n" + smallText);
  }, [smallText, bigText]);

  return (
    <div
      className={`relative transition-all text-black duration-1000 flex ${
        dark && ` text-white bg-dark`
      }`}
    >
      <Layout
        dark={dark}
        setDark={setDark}
        userInput={userInput}
        bigText={bigText}
      >
        <div className="overflow-hidden flex w-screen h-screen justify-center pt-10">
          <div className="flex flex-col w-[50%] pt-2">
            <textarea
              name="title"
              id="title"
              value={bigText}
              className={`hideScrollBar resize-none w-full text-4xl h-[10%] bg-transparent focus:outline-none ${
                dark && "text-white"
              }`}
              onChange={(e) => {
                e.preventDefault();
                setBigText(e.target.value);
              }}
            ></textarea>
            <textarea
              name="nprma"
              id="notmal"
              value={smallText}
              className={`hideScrollBar resize-none w-full h-full bg-transparent focus:outline-none ${
                dark && "text-white"
              }`}
              onChange={(e) => {
                e.preventDefault();
                setSmallText(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
