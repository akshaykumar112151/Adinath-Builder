import './App.css';

import Navbar from './components/Navbar';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';


function App() {
 

  return (
    <div className="App">
   
      <>
        <Navbar  /> 

          <Whatsapp />
          <Footer />
        </>
     
    </div>
  );
}

export default App;
