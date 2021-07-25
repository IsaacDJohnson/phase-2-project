import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import NavBar from './components/NavBar'
import Profiles from './containers/Profiles'
import CommentForm from './components/CommentForm';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/profiles' component={Profiles}/>
          <Route exact path='/profiles/new' component={CommentForm}/>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
