import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
      
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
      case'UPDATE_CART':
      return{
        ...state,
        items:action.payload,
      }
      case 'ADD_TO_WISHLIST':
        return{
          ...state,
          wishListItems:[...state.wishListItems, action.payload],
        }
        case 'REMOVE_FROM_WISHLIST':
          return{
            ...state,
            wishListItems:state.wishListItems.filter(item=>item!==action.payload)
          }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], wishListItems:[] });

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
