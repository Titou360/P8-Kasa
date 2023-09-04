import { Outlet,} from "react-router-dom";
import Header from "../Header";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
      <div>
        <Header />
        <h1>Page d&apos;accueil</h1>
        <div id="detail">
        <Outlet />
        </div>
        <Footer />
      </div>
    );
  }
  export default Home;