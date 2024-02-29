import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
//Importing components
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

const App = () => {
  
  // Retrieve the current theme from the local storage, if it exists.
  const current_theme = localStorage.getItem('current_theme')
  // useState hook to manage the 'theme' state, initialized with the value from local storage if available, otherwise defaulting to 'light'.
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  // useEffect hook to update the local storage whenever the 'theme' state changes.
  useEffect(() => {
    // Update the 'current_theme' key in the local storage with the current value of the 'theme' state.
    localStorage.setItem('current_theme', theme);
  }, [theme])

  return (
    <div className={`App-container ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme}/>
        <div className={`home-container ${theme}`}>
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
