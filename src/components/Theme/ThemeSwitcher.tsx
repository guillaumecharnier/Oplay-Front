import React from 'react';

interface ThemeSwitcherProps {
  onThemeChange: (theme: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const themes = ['horror', 'action', 'aventure', 'online', 'sport', 'strategie','light'];

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
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;



