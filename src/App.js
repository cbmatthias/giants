import "./App.css";
import { Button } from "./Button";
function App() {
  const style = getStyles();

  return (
    <div className="App">
      <h1 style={style.title}>Hello!</h1>
      <Button notification="Statistics" color="blacK" />
      <Button notification="Calendar" color="green" />
      <hr />
      <a target="_blank" href="https://www.google.com" style={style.linkButton}>
        Google
      </a>
    </div>
  );
}

const getStyles = () => {
  return {
    title: {
      color: "blue",
      fontSize: "20px",
    },
    linkButton: {
      background: "red",
      border: "3px solid royalblue",
      color: "white",
      padding: "3px",
    },
  };
};

export default App;
