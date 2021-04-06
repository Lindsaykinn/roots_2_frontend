import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateFamily from './components/CreateFamily'
import FamilyDetails from './components/FamilyDetails'
import ErrorPage from './components/ErrorPage'
import FamilyList from './components/FamilyList'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
