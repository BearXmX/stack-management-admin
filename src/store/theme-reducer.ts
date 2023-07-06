import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: JSON.parse(localStorage.getItem('theme')!) || 'light',
  },
  reducers: {
    toggleTheme: state => {
      const theme = state.theme === 'light' ? 'dark' : 'light'
      state.theme = theme
      document.documentElement.setAttribute('theme', theme)
      localStorage.setItem('theme', JSON.stringify(theme))
    },
  },
})
export const { toggleTheme } = counterSlice.actions

export default counterSlice.reducer
