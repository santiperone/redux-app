import './List.css';

import {connect} from 'react-redux';
import { useEffect } from 'react';
import Item from '../Item/Item';
import {store_all, fetch_data} from '../../redux/actions/apiActions';

function List( {store_all, list, loading, fetch_data} ) {

  useEffect(() => {
    fetch_data();
  },[])

  return (
    <div className="List">
        <h1>List</h1>
        {loading ? 'Cargando...' : ''}
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
  return {
    list: state.apiState.list,
    loading: state.apiState.loading,
  }
}
export default connect(
  mapStateToProps,
  { store_all, fetch_data }
)(List);