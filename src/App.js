import './App.css';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/:section' component={Navbar} />
      </Router>
    </div>
  );
}

export default App;
