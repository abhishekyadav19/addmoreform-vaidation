import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Details from './Details';
import Home from './Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details/:params" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
