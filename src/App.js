// 필수 내용
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// CSS
import './App.css';

// page 연동
import MainHome from './pages/main/MainHome';
import SubHome from './pages/main/SubHome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<MainHome />} />
          <Route path='/SubHome' element={<SubHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
