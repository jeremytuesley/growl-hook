import "./App.css";
import { useGrowl, Growl } from "./growl";

// Testing environment, timeout is an interchangeable integer in seconds
// message can be changed also

const App = () => {
  const [active, setActive] = useGrowl();

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="#" onClick={() => void setActive(true)}>
          Clik here to activate the growl
        </a>
      </header>
      <Growl onDismissed={() => setActive(false)} active={active} message="Hello World!" timeout={4} />
    </div>
  );
};

export default App;
