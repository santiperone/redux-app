import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import List from './components/List/List';
import Form from './components/Form/Form';

import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path='/home' component={Home} />
        <Route path='/list' component={List} />
        <Route path='/new' component={Form} />
      </Router>
    </div>
  );
}

export default App;
