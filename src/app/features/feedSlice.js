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


export const getUserFeed = createAsyncThunk(
  "api/post/feed/userfeed",
  async () => {

    try {
      const res = await axios.get(`https://glimpsecommunity.herokuapp.com/api/post/feed/userfeed`);

      if (res.data) {
        console.log(res.data)
        return res.data;
      }


    } catch (err) {

      console.log("Couldn't get user feed", err);
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



export const getLatestUsers = createAsyncThunk(
  "api/user",
  async () => {

    try {
      const res = await axios.get(`https://glimpsecommunity.herokuapp.com/api/user/`);

      if (res.data) {
        console.log(res)
        return res.data;
      }

    } catch (err) {

      console.log("couldn't get latest users", err);
    }
  }
);





export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    userFeed: [],
    exploreFeed: [],
    bookReviews: [],
    latestUsers: [],
    isFetchingFeed: false,
    message: "",
  },
  reducers: {

  },


  extraReducers: {
    [getExploreFeed.pending]: (state, action) => {
      state.isFetchingFeed = true;

    },
    [getExploreFeed.fulfilled]: (state, action) => {
      //   console.log(action.payload.data)
      state.exploreFeed = action.payload.posts;
      state.isFetchingFeed = false;
      // state.status = "success";

    },

    [getUserFeed.pending]: (state, action) => {
      state.isFetchingFeed = true;

    },
    [getUserFeed.fulfilled]: (state, action) => {
      //   console.log(action.payload.data)
      state.userFeed = action.payload.posts;
      state.isFetchingFeed = false;
      // state.status = "success";

    },


    [getReviewsByBookId.pending]: (state, action) => {
      state.isFetchingFeed = true;

    },
    [getReviewsByBookId.fulfilled]: (state, action) => {
      //   console.log(action.payload.data)
      state.bookReviews = action.payload.reviews;
      state.isFetchingFeed = false;
      // state.status = "success";

    },
    [postBookReview.pending]: (state, action) => {
      state.isFetchingFeed = true;

    },
    [postBookReview.fulfilled]: (state, action) => {
      //   console.log(action.payload.data)
      state.isFetchingFeed = false;
      // state.status = "success";

    },



    [getLatestUsers.fulfilled]: (state, action) => {
      //   console.log(action.payload.data)
      state.latestUsers = action.payload.users;
      // state.status = "success";

    },



  },
})


export const feedSelector = (state) => state;

