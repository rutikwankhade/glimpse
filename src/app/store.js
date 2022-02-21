import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../app/features/userSlice'

const store = configureStore({
  reducer: {
    user:userReducer
       
  },
})

export default store