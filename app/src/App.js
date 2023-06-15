import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="content">
        <Navbar />
        <Home />
      </header>
    </div>
  );
}

export default App;
