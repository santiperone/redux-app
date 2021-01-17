import './Form.css';

import {connect} from 'react-redux';

function Form() {
  return (
    <div className="Form">
        <h1>Form</h1>
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
)(Form);