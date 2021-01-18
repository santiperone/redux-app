import './Item.css';

import {connect} from 'react-redux';

function Item({data}) {
  return (
    <div className="Item">
        <h3>{data.asunto}</h3>
        <p>{data.mensaje}</p>
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
)(Item);