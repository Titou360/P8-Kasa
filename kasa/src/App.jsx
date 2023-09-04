import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import About from './components/About/About';
import Page404 from './components/404/page404';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/about" element= {<About />} />
          <Route path="/*" element= {<Page404 />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
