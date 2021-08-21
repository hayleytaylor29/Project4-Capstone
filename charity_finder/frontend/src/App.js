import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/home';
import Footer from './components/footer';
import OrgSearch from './pages/orgSearch.js';
import OrgSearchResults from './pages/searchResults';
import AddNew from './pages/addNew.js';
import ViewCharities from './pages/viewCharities';
import Contact from './pages/contact';

function App() {
  return (
    <div>
    <Navigation />
    <Switch>
    <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/orgsearch'>
        <OrgSearch />
      </Route>
      <Route path='/orgsearchresults'>
        <OrgSearchResults />
      </Route>
      <Route path='/newcharity'>
        <AddNew />
      </Route>
      <Route path='/viewcharities'>
        <ViewCharities />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      </Switch>
    <Footer />
    </div>
  );
}

export default App;
