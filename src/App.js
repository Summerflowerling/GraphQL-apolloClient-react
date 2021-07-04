import './App.css';
import GetContinents from './GetContinents';
import GetAfrica from './continents/Africa';
import GetAntarctica from './continents/Antarctica';
import GetAsia from './continents/Asia';
import GetEurope from './continents/Europe';
import GetNorthAmerica from './continents/NorthAmerica';
import GetOceania from './continents/Oceania';
import GetSouthAmerica from './continents/SouthAmerica';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="parent-container">
        <h1>Hello World</h1>
        <p>Choose a contient and see the countries infomation</p>
        <GetContinents />
        <Route path="/Africa" component={GetAfrica} />
        <Route path="/Antarctica" component={GetAntarctica} />
        <Route path="/Asia" component={GetAsia} />
        <Route path="/Europe" component={GetEurope} />
        <Route path="/North America" component={GetNorthAmerica} />
        <Route path="/Oceania" component={GetOceania} />
        <Route path="/South America" component={GetSouthAmerica} />
      </div>
    </Router>
  );
}

export default App;
