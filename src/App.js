import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Loader } from './Pages/Loading/Loader';
import { Main } from './Components/Structure/Main.tsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loader />} />
        <Route path='/homepage' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
