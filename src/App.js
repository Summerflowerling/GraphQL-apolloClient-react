import './App.css';
import GetContinents from './GetContinents';
import GetAfrica from './continents/Africa';
import GetAntarctica from './continents/Antarctica';
import GetAsia from './continents/Asia';
import GetEurope from './continents/Europe';
import GetNorthAmerica from './continents/NorthAmerica';
import GetOceania from './continents/Oceania';
import GetSouthAmerica from './continents/SouthAmerica';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="parent-container">
        <h1>Hello World</h1>
        <p>Click the name and see the countries infomation inside the continent</p>
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
