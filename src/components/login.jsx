import { useState } from 'react';
import './login.css';

function Login({ onLoginSuccess }){
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        if (email && password){
            console.log('Login successful! Moving to MainPage...');
            onLoginSuccess(); // Navigate to MainPage
        }else{
            alert('Please enter both email and password.');
        }
    };

    return(
        <div className="login-container">
            <h1>Login Page</h1>
            <input
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-container">
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    type="button" 
                    onClick={togglePassword}
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
            
            <button onClick={handleLogin} className="login-btn">
                Login
            </button>
        </div>
    );
}

export default Login;