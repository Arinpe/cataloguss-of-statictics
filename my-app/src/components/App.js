import {
  Route, BrowserRouter as Router, Switch, Link,
} from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

export default function App() {
  return (
    <Router>
      <div className="nav">
        <h1 className="logo">Math Magicians</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/calculator" className="nav-link">Calculator</Link>
          <Link to="/quote" className="nav-link">Quote</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </Router>
  );
}
