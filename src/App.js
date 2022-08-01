import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Details';
import Home from './Home';
import Pagination from './Pagination';
import { Search } from './Search';
import Stories from './Stories';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
