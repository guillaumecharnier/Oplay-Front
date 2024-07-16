
export const getThemeClass = (themeId) => {
    switch (themeId) {
      case 1:
        return 'bg-blue-custom-200';
      case 2:
        return 'bg-green-600';
      case 3:
        return 'bg-red-900';
      case 4:
        return 'bg-pink-400';
      case 5:
        return 'bg-indigo-900';
      case 6:
        return 'bg-yellow-600';
    }
  };