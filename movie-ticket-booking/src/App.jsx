import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Booking from './components/Booking';
import SeatBooking from './components/SeatBooking';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/booking" component={Booking} />
          <Route path="/seats" component={SeatBooking} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
