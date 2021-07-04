
import './App.css';
import GetContinents from './GetContinents';
import GetAfrica from './continents/Africa';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <h1>GraphQL ApolloClient</h1>
        <GetContinents />
        <GetAfrica />
      </div>
    </Router>
  );
}

export default App;
