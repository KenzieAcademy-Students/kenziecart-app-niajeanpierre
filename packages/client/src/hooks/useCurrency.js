// import React, { useContext, useReducer } from 'react';

// // Step One: Create a reducer and context

// const initialState = {
//   currency: '$',
//   multiplier: 1,
// };

// const currencyReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_CURRENCY':
//       return {
//         ...state,
//         currency: action.payload.currency,
//         multiplier: action.payload.multiplier,
//       };
//     default:
//       return state;
//   }
// };

// const CurrencyContext = createContext();

// Step Two: Create the useCurrency hook

// export const useCurrency = () => {
//   const context = useContext(CurrencyContext);
//   if (context === undefined) {
//     throw new Error(`useCurrency must be used within a CurrencyProvider`);
//   }
//   return context;
// };

// Step Three: Create the CurrencyProvider component

// export const CurrencyProvider = ({ children }) => {
// //   const [state, dispatch] = useReducer(currencyReducer, initialState);

//   const setCurrency = (currency, multiplier) => {
//     dispatch({
//       type: 'SET_CURRENCY',
//       payload: { currency, multiplier },
//     });
//   };

//   return (
//     <CurrencyContext.Provider value={{ state, setCurrency }}>
//       {children}
//     </CurrencyContext.Provider>
//   );
// };

// export default useCurrency;

  