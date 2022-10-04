import logo from './logo.jpg';
import './App.css';
import insta from './arkinsta.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className='InstaLink' href = 'https://www.instagram.com/arkboutiqueblr/?utm_medium=copy_link'>
         <img src = {insta} className = 'instaLogo' alt = "Follow us on Instagram" />
        </a>
      </header>
    </div>
  );
}

export default App;
