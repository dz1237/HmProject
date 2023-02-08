import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './pages/login/index.jsx'
import Home from './pages/layout/index.jsx'
function App() {
  return (
    <Router>
    <div className="App"> 
      <Link to='/login'>登录</Link>
      <Link to='/home'>首页</Link>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
