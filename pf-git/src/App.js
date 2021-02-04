import './App.css';
import {Button,  MyFavoriteColorCard } from './components/CardColors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Tutorial Git, Comandos Básicos
        </p>
        <a
          className="App-link"
          href="https://github.com/Lloma93/revendo_git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link Repositório
        </a>

        <Button>teste</Button>
        <Button primary>Primary Button</Button>

        <MyFavoriteColorCard hexadecimal="FFFFFF"/>
      </header>
    </div>
  );
}

export default App;
