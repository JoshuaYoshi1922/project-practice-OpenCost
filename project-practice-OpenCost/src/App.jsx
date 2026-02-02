import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage.jsx';
import SearchPage from './Components/SearchPage.jsx';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored ? stored === 'true' : false;
  });

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage onToggleDarkMode={handleToggleDarkMode} isDarkMode={isDarkMode} />} />
          <Route path="/search" element={<SearchPage onToggleDarkMode={handleToggleDarkMode} isDarkMode={isDarkMode} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
