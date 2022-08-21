import logo from './logo.svg';
import './App.css';
import './Search';
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <Search />

      <UserProfile/>
    </div>
  );
}

export default App;
