import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "api/auth/signup",
  async ({ username, email, password }) => {
      

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({ username, email, password })
    console.log(body)

    try {
      const res = await axios.post('https://glimpsecommunity.herokuapp.com/api/auth/signup', body, config);

      if (res.data.success) {
        return res.data;
      }


    } catch (err) {

      console.log("Couldn't signup", err);
    }
  }
);



export const authSlice = createSlice({
  name: "user",
  initialState: {
    token: '',
    loading:false
  },
  reducers: {

  },


  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = "success";
      console.log(action.payload)
      state.token = action.payload;

    },

  },
})


export default authSlice.reducer;