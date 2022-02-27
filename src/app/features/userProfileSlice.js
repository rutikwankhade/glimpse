import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getUserProfile = createAsyncThunk(
  "api/profile/:id",
  async ({ id }) => {


    console.log(id)

    try {
      const res = await axios.get(`https://glimpsecommunity.herokuapp.com/api/user/${id}`);

      if (res.data) {
        console.log(res)
        return res.data;
      }


    } catch (err) {

      console.log("Couldn't grt profile", err);
    }
  }
);



export const addBookToLibrary = createAsyncThunk(
  "api/user/addbook",
  async ({ bookId, status, title, cover }) => {





    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({ bookId, status, title, cover })
    // console.log(body)

    try {
      const res = await axios.post('https://glimpsecommunity.herokuapp.com/api/user/addbook', body, config);

      if (res.data) {
        return res.data;
      }


    } catch (err) {

      console.log("Couldn't update your collection", err);
    }
  }
);



export const userProfileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    isFetching: false,
    message: "",
  },
  reducers: {

  },


  extraReducers: {
    [addBookToLibrary.pending]: (state, action) => {
      state.isFetching = true;

    },
    [addBookToLibrary.fulfilled]: (state, action) => {
      // console.log(action.payload)
      state.profile = action.payload.user;
      state.isFetching = false;
      // state.status = "success";

    },

    [getUserProfile.pending]: (state, action) => {
      state.isFetching = true;

    },
    [getUserProfile.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.profile = action.payload.user;
      state.isFetching = false;
      state.status = "success";

    },


  },
})


export const profileSelector = (state) => state;


