import './List.css';

import {connect} from 'react-redux';

function List() {
  return (
    <div className="List">
        <h1>List</h1>
    </div> 
  );
}

const mapStateToProps = (state) => {
  return {
    
  }
}
export default connect(
  mapStateToProps,
  { }
)(List);