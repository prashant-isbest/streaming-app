import streams from '../apis/streams';

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'EDIT_STREAM':
      //   const newState = { ...state };
      //   newState[action.payload.id] = action.payload;
      //   return newState;
      return { ...state, [action.payload.id]: action.payload }; //square bracket is key interpolation

    default:
      return state;
  }
};
