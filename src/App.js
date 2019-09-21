import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import {StoreProvider} from './contexts'
import './App.scss';

function App() {
  return (
    <StoreProvider>
    <Router>
      <div className="app__container-root">
        <header className="app__container-header">
          <img src="./mwgLogoWhite.png" alt="logo" />
        </header>
        <div className="app__container-splash">
          <div>
            <Route path="/" exact component={Step1} />
            <Route path="/step2/" component={Step2} />
            <Route path="/step3/" component={Step3} />
          </div>
        </div>

      </div>
    </Router>
    </StoreProvider>
  );
}

export default App;
