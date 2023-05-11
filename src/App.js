import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Transactions } from './pages/Transactions';

function App() {
  return (
    <main className="main">
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
