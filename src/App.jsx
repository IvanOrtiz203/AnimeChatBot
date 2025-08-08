import { useState } from 'react'
import './App.css'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="app-container">
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
      {activeTab === 'login' ? <Login /> : <Signup />}
    </div>
  )
}

export default App
