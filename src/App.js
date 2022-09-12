import './App.css';
import Header from './Component/Head/Header';
import Home from './Component/Hero/Home';
import Features from './Component/Features/Features';
import Portfolio from './Component/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Features/>
     <Portfolio/>
    </div>
  );
}

export default App;
