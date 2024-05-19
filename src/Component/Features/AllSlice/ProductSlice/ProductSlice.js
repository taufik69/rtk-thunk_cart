import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// make a thunk function
export const FetcherProduct = createAsyncThunk(
  "productFetcher",
  async (api = null, { rejectWithValue }) => {
    try {
      const resposne = await axios.get(api);
      return resposne?.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  product: {},
  status: "pending",
  SerializedError: null,
};

// handle action in reudcer function
const ProudctSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetcherProduct.pending, (state, action) => {
      state.status = "pending";
    });

    builder.addCase(FetcherProduct.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.product = action.payload;
      state.SerializedError = null;
    });

    builder.addCase(FetcherProduct.rejected, (state, action) => {
      state.status = "rejected";
      state.SerializedError = action.payload;
    });
  },
});

export default ProudctSlice.reducer;
