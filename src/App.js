import './App.css';
import { Loader } from './Pages/Loading/Loader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './Components/Structure/Main';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={
          <Loader />
      } />
        <Route path='/homepage' element={
        <Main />
        } />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
