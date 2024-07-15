import React from 'react';

const ThemeSwitcher: React.FC = () => {
  const themes = ['horror', 'action', 'aventure', 'online', 'sport', 'strategie'];

  return (
    <div className="theme-switcher">
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => {
            console.log(`Switching to theme: ${theme}`);
           
          }}
          className={`m-2 p-2 rounded ${theme}`}
        >
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;



