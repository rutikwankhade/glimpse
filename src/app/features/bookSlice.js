import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getReviewsByBookId = createAsyncThunk(
  "api/post",
  async ({bookId}) => {


    try {
      const res = await axios.get(`https://glimpsecommunity.herokuapp.com/api/post/${bookId}`);

      if (res.data) {
        // console.log(res)
        return res.data;
      }


    } catch (err) {

      console.log("Couldn't grt profile", err);
    }
  }
);



export const bookSlice = createSlice({
    name: "book",
    initialState: {
        bookReviews: [],
        isFetching: false,
        message: "",
    },
    reducers: {

    },


    extraReducers: {
        [getReviewsByBookId.pending]: (state, action) => {
      state.isFetching = true;

    },
    [getReviewsByBookId.fulfilled]: (state, action) => {
    //   console.log(action.payload.data)
      state.exploreFeed = action.payload.posts;
      state.isFetching = false;
      // state.status = "success";

    },


    },
})


export const bookSelector = (state) => state;

