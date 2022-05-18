import { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import MainPage from './pages/MainPage';

function App() {

const input = useDarkMode()

  return (
    <div className={input.isDarkMode ? "dark" : "light"}>
      <button onClick={input.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
