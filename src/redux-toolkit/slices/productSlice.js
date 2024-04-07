import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch(
      "https://fakestoreapi.com/products"
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productData: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {
    addNewProduct: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productData = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// export const { themeChange } = productSlice.actions;

export default productSlice.reducer;
