
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import QuoteGenerator from './components/QuoteGenerator';

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <br/>
      <QuoteGenerator/>
      <Footer/>
    </div>
  );
}

export default App;
