import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getUserProfile = createAsyncThunk(
  "api/profile/:id",
  async ({ id }) => {


    console.log(id)

    try {
      const res = await axios.get(`https://glimpsecommunity.herokuapp.com/api/user/${id}`);

      if (res.data) {
        // console.log(res)
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



//followUser
export const followReader = createAsyncThunk(
  "/api/user/follow",
  async (followReaderID) => {
    try {
      const response = await axios.patch(`https://glimpsecommunity.herokuapp.com/api/user/follow/${followReaderID}`);
      if (response.data.success) {
        return response.data;
      }
      return {};
    } catch (error) {
      console.log("Error, failed to follow user", error);
    }
  }
);


//unfollow
export const unfollowReader = createAsyncThunk(
  "/api/user/unfollow/v1/",
  async (unfollowReaderID) => {
    try {
      const response = await axios.patch(`https://glimpsecommunity.herokuapp.com/api/user/unfollow/v1/${unfollowReaderID}`);
      if (response.data.success) {
        return response.data;
      }
      return {};
    } catch (error) {
      console.log("Error, failed to unfollow user", error);
    }
  }
);



export const getPostsByUserId = createAsyncThunk(
  "api/post/user/userId",
  async (userId) => {
    console.log(userId)

    try {
      const res = await axios.get(`https://glimpsecommunity.herokuapp.com/api/post/user/${userId}`);

      if (res.data) {
        // console.log(res)
        return res.data;
      }

    } catch (err) {

      console.log("Couldn't get user posts", err);
    }
  }
);




export const userProfileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    userPosts:[],
    isFetching: false,
    message: "",
    userFollowStatus: "idle",
    userPostsStatus:'idle'

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
      // console.log(action.payload)

      state.profile = action.payload.user;
      state.isFetching = false;
      state.status = "success";

    },


    [followReader.pending]: (state, action) => {
      state.userFollowStatus = "loading";
    },
    [followReader.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.userFollowStatus = "success";

      if (action.payload.user) {
              state.profile = action.payload.user;

      }
    },
    [followReader.rejected]: (state, action) => {
      state.userFollowStatus = "error";
    },

    [unfollowReader.pending]: (state, action) => {
      state.userFollowStatus = "loading";
    },
    [unfollowReader.fulfilled]: (state, action) => {
      console.log(action.payload)

      state.userFollowStatus = "success";
      state.profile = action.payload.user;
    },
    [unfollowReader.rejected]: (state, action) => {
      state.userFollowStatus = "error";
    },


    [getPostsByUserId.pending]: (state, action) => {
      state.userPostsStatus = "loading";
    },
    [getPostsByUserId.fulfilled]: (state, action) => {
      console.log(action.payload)

      state.userPostsStatus = "success";
      state.userPosts = action.payload.reviews;
    },


  },
})


export const profileSelector = (state) => state;


