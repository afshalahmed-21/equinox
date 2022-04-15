import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './Responsive.css'
import Registration from './Pages/Registration';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import Home from './Pages/Home';
import About from './Pages/About';
import Settings from './Pages/Settings';
import Tournament from './Pages/Tournament';
import Ranking from './Pages/Ranking';
import UploadMaps from './Pages/UploadMaps';

function App() {

  return (
    <div className="App" >
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/tournament/ranking" element={<Ranking />} />
        <Route path="/upload/maps" element={<UploadMaps />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

    </div>
  );
}

export default App;