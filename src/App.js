import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import background from './assets/imgs/synthesis_background.png';
import { Home } from './pages/Home';
import { Transactions } from './pages/Transactions';

function App() {
  return (
    <main className="main">
      <img className="main-background" src={background} alt="background"/>
      <BrowserRouter>
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='transactions' element={<Transactions/>}/>
          </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
