
import { createSlice } from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
  name: 'wishlist',

  initialState: {
    wishlist: []
  },

  reducers: {

    addToWishlist: (state, action) => {
      const product = action.payload

      const exist = state.wishlist.find(
        item => item.id === product.id
      )

      if (!exist) {
        state.wishlist.push(product)
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        item => item.id !== action.payload
      )
    }

  }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer
