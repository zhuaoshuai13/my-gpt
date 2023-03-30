// import type { PayloadAction } from '@reduxjs/toolkit'

// import { createSlice } from '@reduxjs/toolkit'
// import { HYDRATE } from 'next-redux-wrapper'

// import type { RootState } from '@/store'
// import type { AppState } from './type'
// import type { GlobalDataResType } from '@/services'

// import { STORE_NAMESPACE } from '@/constants'
// import globalConfig from '@/configs/index.mjs'

// const initialState: AppState = {
//   responsive: {
//     isSmScreen: false,
//     isMdScreen: false,
//     isLgScreen: false,
//     isXlScreen: false,
//     is2xlScreen: false,
//   },
//   logo: null,
//   favicon: null,
//   footer: '',
//   isThirdPartyJump: false,
//   apiDomain: '',
//   locale: globalConfig.i18n.defaultLocale,
//   official_site: '',
//   loginModal: false,
//   censorWords: { isEnd: 1 },
// }

// export const appSlice = createSlice({
//   name: STORE_NAMESPACE.app,
//   initialState,
//   reducers: {
//     setResponsive: (state, action: PayloadAction<AppState['responsive']>) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.responsive = action.payload
//     },
//     setGlobalData: (state, action: PayloadAction<GlobalDataResType>) => {
//       state.favicon = action.payload.favicon
//       state.logo = action.payload.logo
//       state.footer = action.payload.footer
//       state.official_site = action.payload.official_site
//     },
//     setCensorWords: (state, action: PayloadAction<AppState['censorWords']>) => {
//       state.censorWords = action.payload
//     },
//     setIsThirdPartyJump: (
//       state,
//       action: PayloadAction<AppState['isThirdPartyJump']>
//     ) => {
//       state.isThirdPartyJump = action.payload
//     },
//     setApiDomain: (state, action: PayloadAction<AppState['apiDomain']>) => {
//       state.apiDomain = action.payload
//     },
//     setLocale: (state, action: PayloadAction<AppState['locale']>) => {
//       state.locale = action.payload
//     },
//     setLoginModal: (state, action: PayloadAction<AppState['loginModal']>) => {
//       state.loginModal = action.payload
//     },
//   },
//   extraReducers: {
//     [HYDRATE]: (state, action) => {
//       return {
//         ...state,
//         ...action.payload[STORE_NAMESPACE.app],
//       }
//     },
//   },
// })

// export const appActions = appSlice.actions

// export const appSelector = (state: RootState) => state.app

// export default appSlice.reducer
