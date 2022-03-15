import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registration from './Pages/Registration';
import '../src/Assets/Responsive.css'
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './Pages/ForgotPassword';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

    </div>
  );
}

export default App;