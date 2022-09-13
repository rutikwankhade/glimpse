import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";


export const loadUser = createAsyncThunk(
  'api/auth',
  async () => {

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('https://glimpse-backend-production.up.railway.app/api/auth/token');
      if (res.data) {
        return res.data;
      }


    } catch (err) {
      console.log("Failed to load user", err);

    }
  }
)

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
      const res = await axios.post('https://glimpse-backend-production.up.railway.app/api/auth/signup', body, config);

      if (res.data.success) {
        return res.data;
      }


    } catch (err) {

      console.log("Couldn't signup", err);
    }
  }
);




export const loginUser = createAsyncThunk(
  "api/auth/login",
  async ({ email, password }) => {


    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({ email, password })
    console.log(body)

    try {
      const res = await axios.post('https://glimpse-backend-production.up.railway.app/api/auth/login', body, config);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token)

        return res.data;
      }


    } catch (err) {

      console.log("Couldn't login", err);
    }
  }
);


export const updateUserData = createAsyncThunk(
  "api/user/update/profile",
  async ({ userId, avatarUrl }) => {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({ avatarUrl })

    // console.log(userId)
    try {
      const res = await axios.post(`https://glimpse-backend-production.up.railway.app/api/user/update/profile/${userId}`, body, config);
      if (res.data.success) {
        console.log(res.data)
        return res.data;
      }

    } catch (err) {
      console.log("Error, can't update user details", err);
    }
  }
);





export const authSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    userId: "",
    isAuthenticated: false,
    token: "",
    isFetching: false,
    message: "",
    updating: false
  },
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem('token');
      state.user = {};
      state.isAuthenticated = false;
      state.token = "";
    },

  },


  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.isFetching = true;

    },
    [registerUser.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isFetching = false;
      state.status = "success";
      state.isAuthenticated = true;
      state.userId = action.payload.user.userId;



    },
    [registerUser.rejected]: (state, { payload }) => {
      state.message = payload.message;
    },

    [loginUser.pending]: (state, action) => {
      state.isFetching = true;

    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(action.payload)
      if (action.payload) {
       state.user = action.payload.user;
      state.token = action.payload.token;
      state.isFetching = false;
      state.status = "success";
      state.isAuthenticated = true;
      state.userId = action.payload.user.userId; 
      }
      



    },
    [loginUser.rejected]: (state, { payload }) => {
      state.message = payload.message;
      state.isFetching = false;
    },


    [loadUser.fulfilled]: (state, action) => {
      // console.log(action.payload)
      if (action.payload?.user) {
        state.user = action.payload.user;
        state.userId = action.payload.user._id;

        state.isAuthenticated = true;
      }


    },
    [loadUser.rejected]: (state, { payload }) => {
      state.message = payload.message;
    },


    [updateUserData.pending]: (state, action) => {
      state.updating = true;
    },

    [updateUserData.fulfilled]: (state, action) => {
      console.log(action.payload.user)

      state.user = action.payload.user;
      state.updating = false;


    }

  },
})

export const { logout } = authSlice.actions;


export const userSelector = (state) => state;


// export default authSlice.reducer;

