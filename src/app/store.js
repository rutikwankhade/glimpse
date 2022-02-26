import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../app/features/authSlice'
import { profileSlice } from './features/profileSlice'
import { feedSlice } from './features/feedSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile:profileSlice.reducer,
    feed:feedSlice.reducer
       
  },
})

export default store