import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import FriendList from './components/FriendList';
import SongDetail from './components/SongDetail';
import SongList from './components/SongList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Friends and Song List App</h1>
      </header>
      <Router>
        <nav>
          <Link to="/">Friend List</Link>
          <Link to="/song-list">Song List</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FriendList />} />
          <Route path="/song-list" element={<SongList />} />
          <Route path="/song-list/:id" element={<SongDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
