import { useState } from 'react'
import './App.css'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'
import MainPage from './components/MainPage.jsx'
import ChatPage from './components/ChatPage.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('main');
  const [initialMessage, setInitialMessage] = useState('');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleStartChat = (message) => {
    setInitialMessage(message);
    setCurrentPage('chat');
  };

  // If logged in, show MainPage or ChatPage
  if (isLoggedIn) {
    return (
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        {currentPage === 'main' ? (
          <MainPage darkMode={darkMode} onStartChat={handleStartChat} />
        ) : (
          <ChatPage darkMode={darkMode} initialMessage={initialMessage} />
        )}
      </div>
    );
  }

  // Otherwise show login/signup tabs
  return (
    <div className={`app-container ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? '☀️' : '🌙'}
      </button>
      
      {/* Tab Navigation */}
      <div className="tab-nav">
        <button 
          className={`tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button 
          className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => setActiveTab('signup')}
        >
          Sign Up
        </button>
      </div>

      {/* Show only the active form */}
      {activeTab === 'login' ? <Login onLoginSuccess={handleLoginSuccess} darkMode={darkMode} /> : <Signup darkMode={darkMode} />}
    </div>
  )
}

export default App
