import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Team from "./components/Team";
import Users from "./components/Users";
import LearnReact from "./components/LearnReact";
import Posts from "./components/Posts";

function App() {
  const handleClick = () => {
    alert("button clicked");
  };

  const handleClick2 = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Core Concept</h1>
      <LearnReact></LearnReact>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2(5)}>Click to add</button>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Posts></Posts>
    </>
  );
}

export default App;
