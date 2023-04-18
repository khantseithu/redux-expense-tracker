import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expenseSlice";

const store = configureStore({
  reducer: {
    expense: expenseSlice.reducer,
  },
});

export { store };
