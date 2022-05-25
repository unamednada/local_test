import { HashRouter } from 'react-router-dom';
import Router from './router/Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;
