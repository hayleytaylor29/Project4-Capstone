import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/home';
import Footer from './components/footer';
import Search from './pages/search';

function App() {
  return (
    <div>
    <Navigation />
    <Switch />
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
    <Footer />
    </div>
  );
}

export default App;
