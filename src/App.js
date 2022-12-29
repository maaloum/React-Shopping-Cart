import './App.css';
import data from './components/back/Data/Data.js'
import Header from './components/front/Header/Header.js'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/front/Routes/Route'
import Footer from './components/front/Footer/Footer';

function App() {
  const productsItems = data
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes productsItems={productsItems}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
