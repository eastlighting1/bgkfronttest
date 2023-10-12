import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/Login/LoginPage';
import SignUpPage from './Pages/SignUp/SignUpPage';
import HomePage from './Pages/Home/HomePage';
import HomePageLogin from './Pages/Home/HomePage_login';
import Bubble from './Pages/Bubble/Bubble';
import BubbleLogin from './Pages/Bubble/Bubble_login';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/join" element={<SignUpPage />} />
          <Route path="/home_login" element={<HomePageLogin />} />
          <Route path="/bubble" element={<Bubble />} />
          <Route path="/bubble_login" element={<BubbleLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
