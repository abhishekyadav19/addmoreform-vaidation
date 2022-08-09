// import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './authentication/Login';
import LoginForm from './authentication/LoginForm';
import LoginForm2 from './authentication/LoginForm2';
import SignUp from './authentication/SignUp';

function App() {

  return (
    <>
    <Routes>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/' element={<Login />} />
    </Routes>
    

      {/* <LoginForm2/> */}
      {/* <LoginForm /> */}
    </>
  );
}


export default App;
