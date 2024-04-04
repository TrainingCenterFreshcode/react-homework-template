import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UserListPage from "./pages/UserListPage/UserListPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/todo'>Todo</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/users' element={<UserListPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
