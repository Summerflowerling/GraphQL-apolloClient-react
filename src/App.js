
import './App.css';
import GetContinents from './GetContinents';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <h1>GraphQL ApolloClient</h1>
        <GetContinents />
      </div>
    </Router>
  );
}

export default App;
