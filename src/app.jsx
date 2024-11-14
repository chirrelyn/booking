import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BookingConfirmation from './BookingConfirmation';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Switch>
          <Route path="/booking-confirmation">
            <BookingConfirmation />
          </Route>
          <Route path="/">
            {/* Your existing content */}
            <Link to="/booking-confirmation">Go to Booking Confirmation</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

  