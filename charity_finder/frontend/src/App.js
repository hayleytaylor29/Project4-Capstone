import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/home';
import Footer from './components/footer';
import OrgSearch from './pages/orgSearch.js';
import OrgSearchResults from './pages/searchResults';

function App() {
  return (
    <div>
    <Navigation />
    <Switch>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route path='/orgsearch'>
        <OrgSearch />
      </Route>
      <Route path='/orgsearchresults'>
        <OrgSearchResults />
      </Route>
      </Switch>
    <Footer />
    </div>
  );
}

export default App;
