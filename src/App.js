import logo from './logo.svg';
import Navbar from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInComponent from './signin';
import SignupComponent from './signup';


function App() {
  return (
    <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<SignInComponent/>} />
            <Route path="/sign-up" element={<SignupComponent/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
