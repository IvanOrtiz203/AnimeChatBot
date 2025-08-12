import {useState} from 'react';
import './MainPage.css';

function MainPage({ darkMode }) {
    const [userInput, setUserInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim()){
            console.log('User prompt:', userInput);
        }
    }
    return(
        <div className={`main_page ${darkMode ? 'dark-theme' : 'light-theme'}`}>
            <div className = "welcome_container">
                <h1 className="bot-greeting">Hello I'm AnimeBot</h1>

                    <p className="bot-description">
                        I'm your friendly anime chatbot! I can help you discover new anime, 
                        discuss your favorite characters, recommend shows based on your preferences, 
                        and chat about all things anime. What would you like to know?
                    </p>

                    <form onSubmit={handleSubmit} className="input-form">
                    <textarea
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Ask me anything about anime..."
                        className="user-input"
                        rows="4"
                    />
                    <button type="submit" className="submit-btn">
                        Start Chatting
                    </button>
                </form>
            </div>
        </div>
    );
}
export default MainPage;