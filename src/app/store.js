import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../app/features/authSlice'
import { feedSlice } from './features/feedSlice'
import { userProfileSlice } from './features/userProfileSlice'
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile:userProfileSlice.reducer,
    feed:feedSlice.reducer
       
  },
})

export default store