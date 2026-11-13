import "./App.css"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import Destinations from "./Components/Destinations/Destinations"

function App() {
    return (
      <div className="app"> 
        <Header/>
            <main>
              <Destinations/>
            </main>
        <Footer/>
      </div>
    );
}

export default App;