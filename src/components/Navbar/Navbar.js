import './Navbar.css';

import {nav_click} from '../../redux/actions/navActions';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Home from '../Home/Home';
import List from '../List/List';
import Form from '../Form/Form';
import { useEffect } from 'react';

function Navbar({title, nav_click, match: {params}}) {
  
  const buttonClick = (title) => {
    nav_click({
      title: title,
    });
  }

  useEffect(() => {
    let title = ''
    switch(params.section) {
      case 'home': {
        title = 'Home'
        break;
      }
      case 'list': {
        title = 'List'
        break;
      }
      case 'new': {
        title = 'New'
        break;
      }
      default: title = '?';
    }
    nav_click({
      title: title,
    });
  }, [])

  const renderSection = () => {
    switch(params.section) {
      case 'home': {
        return <Home/>
      }
      case 'list': {
        return <List/>
      }
      case 'new': {
        return <Form/>
      }
      default: return;
    }
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
        {renderSection()}

    </div> 
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.navState.title,
    section: ownProps.section,
  }
}
export default connect(
  mapStateToProps,
  { nav_click }
)(Navbar);