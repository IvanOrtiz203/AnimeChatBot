import { useState } from 'react';
import './login.css';

function Signup(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignup = () => {
        if (email && password && confirmPassword) {
            if (password === confirmPassword) {
                console.log('Signup successful!', email);
                // TODO: Add signup logic here
            } else {
                alert('Passwords do not match!');
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    return(
        <div className="login-container">
            <h1>Sign Up</h1>
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

            <input
                type="password" 
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            
            <button onClick={handleSignup} className="signup-btn">
                Sign Up
            </button>
        </div>
    );
}

export default Signup;
