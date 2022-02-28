import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getExploreFeed = createAsyncThunk(
  "api/post",
  async () => {


    try {
      const res = await axios.get(`https://glimpsecommunity.herokuapp.com/api/post/`);

      if (res.data) {
        // console.log(res)
        return res.data;
      }


    } catch (err) {

      console.log("Couldn't grt profile", err);
    }
  }
);

export const postBookReview = createAsyncThunk(
  "api/post/addpot",
  async ({ title,
    bookId,
    primaryColor,
    secondaryColor,
    review,
    category,
    cover, }) => {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({
      title,
      bookId,
      primaryColor,
      secondaryColor,
      review,
      category,
      cover,
    })
    // console.log(body)

    try {
      const res = await axios.post('https://glimpsecommunity.herokuapp.com/api/post/addpost', body, config);

      if (res.data) {
        return res.data;
      }


    } catch (err) {

      console.log("Couldn't update your collection", err);
    }
  }
);



export const getReviewsByBookId = createAsyncThunk(
  "api/post/:bookId",
  async (bookId) => {


    try {
      const res = await axios.get(`https://glimpsecommunity.herokuapp.com/api/post/${bookId}`);

      if (res.data) {
        console.log(res)
        return res.data;
      }


    } catch (err) {

      console.log("couldn't get book reviews", err);
    }
  }
);



export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    userfeed: [],
    exploreFeed: [],
    bookReviews: [],
    isFetching: false,
    message: "",
  },
  reducers: {

  },


  extraReducers: {
    [getExploreFeed.pending]: (state, action) => {
      state.isFetching = true;

    },
    [getExploreFeed.fulfilled]: (state, action) => {
      //   console.log(action.payload.data)
      state.exploreFeed = action.payload.posts;
      state.isFetching = false;
      // state.status = "success";

    },


    [getReviewsByBookId.pending]: (state, action) => {
      state.isFetching = true;

    },
    [getReviewsByBookId.fulfilled]: (state, action) => {
      //   console.log(action.payload.data)
      state.bookReviews = action.payload.reviews;
      state.isFetching = false;
      // state.status = "success";

    },



  },
})


export const feedSelector = (state) => state;

