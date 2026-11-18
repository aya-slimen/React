import "./App.css"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Destinations from "./Components/Destinations/Destinations";
import Exemple from "./assets/Exemples/Exemple";

function App() {
    return (
      <div className="app"> 
        <Header/>
            <main>
              <Destinations/>
              <Exemple/>
            </main>
        <Footer/>
      </div>
    );
}

export default App;