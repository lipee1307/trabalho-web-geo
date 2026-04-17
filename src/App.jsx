import './App.css';
import iaLogo from './assets/ia.png';

function App() {
  return (
    <div className="container">
      <div className="login-card">
        {/* Ícone Central */}
        <div className="logo-container">
          <div className="logo-glow"></div>
          <img src={iaLogo} alt="AI Logo" className="logo-img" />
        </div>

        {/* Formulário */}
        <div className="input-group">
          <input type="text" placeholder="user name or email" className="input-field" />
        </div>

        <div className="input-group">
          <div className="password-wrapper">
            <input type="password" placeholder="password" className="input-field" />
            <span className="eye-icon">👁️</span>
          </div>
        </div>

        <button className="login-button">login</button>

        <a href="#" className="forgot-password">forgot password ?</a>
      </div>
    </div>
  );
}

export default App;