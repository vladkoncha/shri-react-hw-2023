import { CartState } from "@/store/features/cart/index";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { createSelector } from "reselect";

export interface State {
  cart: CartState;
}

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const selectCartModule = (state: State) => state.cart;

export const selectInCart = createSelector([selectCartModule], (cartModule) => {
  return Object.keys(cartModule);
});

export const selectTicketAmount = (state: State, id: string) =>
  selectCartModule(state)[id] || 0;

export const selectAllAmount = (state: State) => {
  let totalAmount = 0;
  const cart = selectCartModule(state);
  for (const movieId in cart) {
    totalAmount += cart[movieId];
  }
  return totalAmount;
};
