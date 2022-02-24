import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addBookToLibrary = createAsyncThunk(
  "api/user/addbook",
  async ({ bookId, status, bookTitle, cover }) => {


    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({ bookId, status, bookTitle, cover })
    console.log(body)

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



export const profileSlice = createSlice({
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
      console.log(action.payload)
      state.profile = action.payload.user;
      state.isFetching = false;
      state.status = "success";

    },


  },
})


export const profileSelector = (state) => state;


