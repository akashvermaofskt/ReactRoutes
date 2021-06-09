import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Reviews from './Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/reviews/:product_id/:viewer_id' exact component={Reviews}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
