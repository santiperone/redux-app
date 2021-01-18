import './List.css';

import {connect} from 'react-redux';
import { useEffect } from 'react';
import Item from '../Item/Item';
import {store_all, fetch_data} from '../../redux/actions/apiActions';

function List( {list, loading, fetch_data, error} ) {

  useEffect(() => {
    fetch_data();
  },[])

  return (
    <div className="List">
        <h1>List</h1>
        {loading ? 'Cargando...' : ''}
        {error ? 'Error: ' + error : ''}
        {
          list && list.length ?
            list.map((item, index) => {
              return <Item data={item} key={index}/>
            })
            : ''
        }
    </div> 
  );
}

const mapStateToProps = (state) => {
  console.log(state.apiState);
  return {
    list: state.apiState.list,
    loading: state.apiState.loading,
    error: state.apiState.error,
  }
}
export default connect(
  mapStateToProps,
  { store_all, fetch_data }
)(List);