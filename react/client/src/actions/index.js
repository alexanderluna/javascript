import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from './types';
import streams from '../apis/streams';


export const signIn = userId => ({ type: SIGN_IN, payload: userId });

export const signOut = () => ({ type: SIGN_OUT });

export const onAuthChange = () => async (dispatch) => {
  const auth = window.gapi.auth2.getAuthInstance();
  if (auth.isSignedIn.get()) {
    dispatch(signIn(auth.currentUser.get().getId()));
  } else {
    dispatch(signOut());
  }
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push('/');
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = id => async (dispatch) => {
  await streams.put(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
