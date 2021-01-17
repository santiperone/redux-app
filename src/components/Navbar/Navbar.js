import './Navbar.css';

import navState from '../../redux/reducers/navReducer';
import {nav_click} from '../../redux/actions/navActions';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function Navbar({title, nav_click}) {
  const buttonClick = (title) => {
    nav_click({
      title: title,
    });
  }

  return (
    <div className="Navbar">
        <header className="App-header">
            <div>
                <h1>{title}</h1>
            </div>
            <Link to='/home' onClick={() => buttonClick('Home')}>Home</Link>
            <Link to='/list' onClick={() => buttonClick('List')}>List</Link>
            <Link to='/new' onClick={() => buttonClick('New')}>New</Link>
        </header>
    </div> 
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.navState.title,
  }
}
export default connect(
  mapStateToProps,
  { nav_click }
)(Navbar);