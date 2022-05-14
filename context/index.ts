import { createContext, useReducer } from 'react';
import { CURRENT_QUESTION_ORDER, USER_TYPE } from './action';

const initialState = {
  CURRENT_QUESTION_ORDER: 1,
  USER_TYPE: 'student',
};

const Context = createContext({});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_QUESTION_ORDER:
      return {
        ...state,
        productList: {
          ...state.productList,
          fruits: [...state.productList.fruits, action.payload],
        },
      };
    default:
      return state;
  }
};

const StoreProvider = ({ childeren }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{childeren}</Context.Provider>;
};

export { Context, StoreProvider };
