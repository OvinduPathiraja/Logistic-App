import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, we would also add/remove a class from the HTML element
    // and save the preference to localStorage
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} h-screen flex`}>
      <Sidebar />
      <div className="flex-1 ml-60">
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main className="p-6 bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-4rem)]">
          {title && (
            <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">{title}</h1>
          )}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;