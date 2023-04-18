import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenses: [],
  },
  reducers: {
    addExpenseAction: (state, action) => {
      state.expenses.push(action.payload);
    },
  },
});

export const { addExpenseAction } = expenseSlice.actions;
