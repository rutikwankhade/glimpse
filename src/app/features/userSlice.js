import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      username: ''
    }
  },
  reducers: {

  }
})


export default userSlice.reducer;