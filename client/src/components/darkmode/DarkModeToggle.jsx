import React, { useState, useEffect } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={handleToggle} className="p-2">
      {darkMode ? <IoSunny /> : <IoMoon />}
    </button>
  );
};

export default DarkModeToggle;
