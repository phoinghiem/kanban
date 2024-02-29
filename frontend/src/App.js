import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Homepage/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
