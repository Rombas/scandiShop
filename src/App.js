import './App.css';
import Header from './components/Header/Header';
import ProductCardsHOC from './components/ProductCards/ProductCardsHOC';

function App() {
  return (
    <div className="App">
     <Header />
     <h1>Category name</h1>
     < ProductCardsHOC />
    </div>
  );
}

export default App;
