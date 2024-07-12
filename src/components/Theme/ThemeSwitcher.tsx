import React from 'react';

interface ThemeSwitcherProps {
  onThemeChange: (theme: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const themes = ['horror', 'action', 'aventure', 'online', 'sport', 'strategie'];

  return (
    <div className="theme-switcher">
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => {
            console.log(`Switching to theme: ${theme}`);
            onThemeChange(theme);
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



