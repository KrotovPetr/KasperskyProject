import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGood {
  query: string;
}

const initialState: IGood = {
  query: "",
};

export const usersSlice = createSlice({
  name: "fetchSlice",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});
export const { setQuery } = usersSlice.actions;
export default usersSlice.reducer;
