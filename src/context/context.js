import { createContext, useContext, useReducer } from 'react';
import { ADD_TRANSACTION, DELETE_TRANSACTION } from './actionTypes';
import reducer from './reducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
   const [transactions, dispatch] = useReducer(reducer, initialState);

   // Action Creators
   const addTransaction = (transaction) =>
      dispatch({ type: ADD_TRANSACTION, payload: transaction });
   const deleteTransaction = (id) =>
      dispatch({ type: DELETE_TRANSACTION, payload: id });

   const balance = transactions.reduce(
      (acc, currVal) =>
         currVal.type === 'Expense'
            ? acc - currVal.amount
            : acc + currVal.amount,
      0
   );

   return (
      <ExpenseTrackerContext.Provider
         value={{ transactions, addTransaction, deleteTransaction, balance }}
      >
         {children}
      </ExpenseTrackerContext.Provider>
   );
};

export const useExpenseTrackerContext = () => useContext(ExpenseTrackerContext);
