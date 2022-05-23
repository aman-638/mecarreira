import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AllRoute from './routes/Route';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;
