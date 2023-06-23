import { createSlice } from "@reduxjs/toolkit";

export const MAX_TICKETS = 30;

export interface CartState {
  [key: string]: number;
}

interface Action {
  payload: string;
}

const initialState: CartState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }: Action) => {
      const count = state[payload] || 0;

      if (count < MAX_TICKETS) {
        state[payload] = count + 1;
      }
    },
    decrement: (state, { payload }: Action) => {
      const count = state[payload];

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },

    reset: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
