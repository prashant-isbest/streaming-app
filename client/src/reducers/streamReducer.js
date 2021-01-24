import streams from '../apis/streams';
import _ from 'lodash';
export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STREAMS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'FETCH_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'EDIT_STREAM':
      //   const newState = { ...state };
      //   newState[action.payload.id] = action.payload;
      //   return newState;
      return { ...state, [action.payload.id]: action.payload }; //square bracket is key interpolation
    case 'DELETE_STREAM':
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
