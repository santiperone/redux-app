import * as types from './actionTypes';
import axios from 'axios';

export const store_all = data => ({
    type: types.STORE_ALL,
    payload: {
        list: data.list,
        loading: data.loading,
    },
})

export const sending_request = () => ({
    type: types.SENDING_REQUEST,
    payload: {
        loading: true,
    },
})

export const request_data = data => ({
    type: types.REQUEST_DATA,
    payload: {
        list: data.data,
        loading: false,
    },
})

export const request_error = error => ({
    type: types.REQUEST_ERROR,
    payload: {
        error: error,
        loading: false,
    },
})

const get_data = () => {
    return axios
      .get('http://dev.contanimacion.com/api_tablon/api/mensajes')
      .then(res => res)
      .catch(err => err)
}

export const fetch_data = () => dispatch => {
    dispatch(sending_request());
    return get_data()
        .then(data => {
            dispatch(request_data(data));
        })
        .catch(err => {
            console.log(err);
            dispatch(request_error(err));
        })
}

export const request_post_data = data => ({
    type: types.REQUEST_POST_DATA,
    payload: {
        ok: data.data[0].ok,
        loading: false,
    },
})

const post_data = (data) => {
    return axios
      .post('http://dev.contanimacion.com/api_tablon/api/mensajes/add', data)
      .then(res => res)
      .catch(err => err)
}

export const send_new = (data) => dispatch => {
    dispatch(sending_request());
    return post_data(data)
        .then(data => {
            dispatch(request_post_data(data));
        })
        .catch(err => {
            console.log(err);
            dispatch(request_error(err));
        })
}