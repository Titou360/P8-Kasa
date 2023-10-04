import '../src/assets/style/index.scss';
import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import About from './routes/About';
import Error404 from './components/Error404'
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyDetails from './routes/PropertyDetails';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element= { <Home /> } />
          <Route path="/about" element= { <About /> } />
          <Route path="/property/:id" element={ <PropertyDetails /> } />
          <Route path="/*" element= { <Error404 /> } />
          <Route path="/property/*" element= { <Error404 /> } />
          <Route path ="/P8-Kasa/" element={<Home />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;