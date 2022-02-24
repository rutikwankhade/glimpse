import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../app/features/authSlice'
import { profileSlice } from './features/ProfileSlice'
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile:profileSlice.reducer
       
  },
})

export default store