import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ListUsers from './components/ListUsers';
import CreateUsers from './components/CreateUsers';
import EditUsers from './components/EditUsers';

function App() {
  return (
    <div className="App">
      <h5>React CRUD operation using PHP API and Mysql</h5>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>

            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUsers />}></Route>
          <Route path="user/create" element={<CreateUsers />}></Route>
          <Route path="user/:id/edit" element={<EditUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
