import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../firebaseConfig";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await login(email, password);
      const userData = {
        uid: userCredential.uid,
        email: userCredential.email,
      };

      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    logoutUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
