import React, {createContext, useReducer} from 'react';
import {initialState, reducer} from '../../modules/step2';

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const store = useReducer(reducer, initialState);
    return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    );
  };
  
  export { StoreContext, StoreProvider };