import { Route, Routes } from 'react-router';
import NavBar from './components/navBar/NavBar';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/missions" />
        <Route path="/myprofile" />
      </Routes>
    </div>
  );
}

export default App;
