import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import NumberLister from './NumberLister';
import MyProfile from './MyProfile';

function App() {
  return (
    <div>Hello World,
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Number Lister</Link>
            </li>
            <li>
              <Link to="/myprofile">My Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<NumberLister />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
