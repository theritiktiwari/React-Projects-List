import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./widget/Header";
import { Footer } from "./widget/Footer";
import { Landing } from "./widget/Landing";
import { BMICalculator } from './widget/BMICalculator';
import { Clock } from "./widget/Clock";
import { ColorChanger } from "./widget/ColorChanger";


function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" >
            <Landing />
            <Footer />
          </Route>

          <Route exact path="/bmi">
            <BMICalculator />
          </Route>

          <Route exact path="/clock">
            <Clock />
          </Route>

          <Route exact path="/colorChanger">
            <ColorChanger />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
