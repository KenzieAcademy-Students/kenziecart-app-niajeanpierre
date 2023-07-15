
// // Step One: Create a reducer and context

const { createContext, useReducer, useContext, useEffect } = require("react");

const currencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const savedCurrency = JSON.parse(localStorage.getItem("CartCurrency")) || false;

    if(savedCurrency) {
      dispatch ({ type: "LOAD_CURRENCY", ...savedCurrency })
    } else {
      localStorage.setItem("CartCurrency", JSON.stringify(state))
    }
  }, [])

  return <currencyContext.Provider value={{state, dispatch}}>
    {children}
  </currencyContext.Provider>
};

const initialState = {
  symbol: '$',
  multiplier: 1,
};

 const reducer = (state, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case 'TOGGLE_CURRENCY': {
      newState.symbol = newState.symbol === "$" ? "€" : "$";
      newState.multiplier = newState.multiplier === 1 ? 0.8 : 1;
      break;
    }
    case "LOAD_CURRENCY": {
      newState.symbol = action.symbol;
      newState.multiplier = action.multiplier;
      break;
    }
    default: {
      break;
    }
  }
  localStorage.setItem("CartCurrency", JSON.stringify(newState));
  return newState;
};

const useCurrency = () => {
  const { state, dispatch } = useContext(currencyContext);

  const toggleCurrency = () => dispatch({ type: "TOGGLE_CURRENCY"});
  
  const getPrice = (amount) => `${state.symbol}${(amount * state.multiplier)}`;

  return { currency: state, getPrice, toggleCurrency };
};

export default useCurrency;
  