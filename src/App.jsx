import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Contactus from "./components/Contactus/Contactus";
import Contactform from "./components/Contactform/Contactform";
function App() {
  return (
    
    <div>
      <Navigation/>
      <main>
      <Contactus/>
      <Contactform/>
      </main>
     
    </div>
  );
};

export default App;
