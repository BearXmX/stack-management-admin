declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*.svg'
declare module '*.less'

type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]: [K, ...DeepKeys<T[K]>]
    }[keyof T]
  : []

declare interface storeStateType {
  theme: {
    theme: 'dark' | 'light'
  }
}

declare type storeStateKeysType = DeepKeys<storeStateType>
