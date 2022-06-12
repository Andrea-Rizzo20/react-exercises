import { Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import ShowGitHubUser from "./ShowGitHubUser";
import { Welcome } from "./Welcome";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Andrea" />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGitHubUser />} />
      </Routes>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Counter">Counter</Link>
        <Link to="/users/Andrea-Rizzo20">Andrea Rizzo GitHub</Link>
      </div>
    </div>
  );
};

export default App;
