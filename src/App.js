import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import AddUsers from './components/users/AddUsers';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import EditUsers from './components/users/EditUsers';
import User from './components/users/User';
import Login from './components/users/Login';


function App() {
  return (
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/users/addusers" element={<AddUsers/>} />
          <Route path="/users/editusers/:id" element={<EditUsers/>} />
          <Route path="/users/user/:id" element={<User/>} />
          <Route path="/users/login" element={<Login/>} />
          <Route component={NotFound} />
        </Routes>
      </div>
  );
}

export default App;
