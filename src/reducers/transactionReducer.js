import { v4 as uuidv4 } from "uuid";



export const transactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.transaction.name,
          amount: action.transaction.amount,
          type: action.transaction.type,
          category: action.transaction.category,
          date: action.transaction.date,
        },
      ];

    case "REMOVE_TRANSACTION":
      return state.filter((transaction) => transaction.id !== action.id);
    default:
      return state;
  }
};
