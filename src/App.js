import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './routes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './routes/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={< ItemListContainer />} />
          <Route exact path="/category/:id" element={< ItemListContainer />} />
          <Route exact path="/item/:id" element={< ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}