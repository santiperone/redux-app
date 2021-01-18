import './List.css';

import {connect} from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import Item from '../Item/Item';
import {store_all} from '../../redux/actions/apiActions';

function List( {store_all, list, loading} ) {

  useEffect(() => {
    store_all({
      list: [],
      loading: true,
    })
    axios
      .get('http://dev.contanimacion.com/api_tablon/api/mensajes')
      .then(({data}) => {
        console.log(data);
        store_all({
          list: data,
          loading: false
        })
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  return (
    <div className="List">
        <h1>List</h1>
        <p>{loading ? 'Cargando...' : ''}</p>
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
  { store_all }
)(List);