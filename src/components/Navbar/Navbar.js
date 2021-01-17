import './Navbar.css';

import navState from '../../redux/reducers/navReducer';
import {nav_click} from '../../redux/actions/navActions';

import {connect} from 'react-redux';

function Botonera({title, nav_click}) {
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
            <ul>
                <li onClick={() => buttonClick('Home')}>Home</li>
                <li onClick={() => buttonClick('List')}>List</li>
                <li onClick={() => buttonClick('New')}>New</li>
            </ul>
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
)(Botonera);