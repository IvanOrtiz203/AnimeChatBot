import { useState } from 'react'
import './App.css'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'
import MainPage from './components/MainPage.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // If logged in, show MainPage
  if (isLoggedIn) {
    return (
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <MainPage darkMode={darkMode} />
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
