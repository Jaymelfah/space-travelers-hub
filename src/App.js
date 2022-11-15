import { Route, Routes } from 'react-router';
import NavBar from './components/navBar/NavBar';
import Rockets from './screens/Rockets/Rockets';
import Mission from './screens/Mission/Mission';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route exact path="/missions" element={<Mission />} />
        <Route path="/myprofile" />
      </Routes>
    </div>
  );
}

export default App;
