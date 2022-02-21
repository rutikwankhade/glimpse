import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../app/features/authSlice'

const store = configureStore({
  reducer: {
    auth:authReducer
       
  },
})

export default store