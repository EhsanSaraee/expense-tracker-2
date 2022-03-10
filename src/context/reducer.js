import { ADD_TRANSACTION, DELETE_TRANSACTION } from './actionTypes';

const reducer = (state, action) => {
   switch (action.type) {
      case DELETE_TRANSACTION:
         return state.filter((item) => item.id !== action.payload);
      case ADD_TRANSACTION:
         return [...state, action.payload];
      default:
         return state;
   }
};

export default reducer;
