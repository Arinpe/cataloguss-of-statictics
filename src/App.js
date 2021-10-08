import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './containers/homepage';
import MoviePage from './containers/Video';
import NotFound from './components/NotFound';
import NavBar from './components/Navbar';

const App = () => (
  <Router>
    <div className="App max-width">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:movie" component={MoviePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
