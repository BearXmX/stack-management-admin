import { createSlice } from '@reduxjs/toolkit'

type themeSliceStateType = storeStateType['theme']

type themeSliceReducerType = {
  toggleTheme: (
    state: themeSliceStateType,
    other: {
      payload: {
        theme: themeSliceStateType['theme']
      }
    }
  ) => void | themeSliceStateType
}

type themeSliceNameType = Extract<storeNameSpace, 'theme'>

export const themeSlice = createSlice<themeSliceStateType, themeSliceReducerType, themeSliceNameType>({
  name: 'theme',
  initialState: {
    theme: JSON.parse(localStorage.getItem('theme')!) || 'dark',
  },
  reducers: {
    toggleTheme: (state, { payload }) => {
      document.documentElement.setAttribute('theme', payload.theme)

      state.theme = payload.theme

      localStorage.setItem('theme', JSON.stringify(payload.theme))
    },
  },
})
export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
