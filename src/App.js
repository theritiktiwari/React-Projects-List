import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./widget/Header";
import { Footer } from "./widget/Footer";
import { Content } from "./widget/Content";
import { Alarm } from './widget/Alarm';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" render={() => {
            return(
              <>
                <Content />
                <Footer />
              </>
            )
          }}>
          </Route>
          <Route exact path="/alarm">
            <Alarm />
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
