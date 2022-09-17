import './App.css';
import Header from './Component/Head/Header';
import Home from './Component/Hero/Home';
import Features from './Component/Features/Features';
import Portfolio from './Component/Portfolio/Portfolio';
import Resume from './Component/Resume/Resume';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Features/>
     <Portfolio/>
     <Resume/>
    </div>
  );
}

export default App;
