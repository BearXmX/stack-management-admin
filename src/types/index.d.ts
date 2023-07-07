declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*.svg'
declare module '*.less'

// 获取每一层的键，组成元祖
type deepAllKeys<T> = T extends object
  ? {
      [K in keyof T]: [K, ...deepAllKeys<T[K]>]
    }[keyof T]
  : []

// 联合类型转联合元祖 'theme' => ['theme']
type unionToUnionTurple<T> = T extends keyof storeStateType ? [T] : never

// 元祖转联合类型  ['theme'] => 'theme'
type tupleToUnion<T> = T extends Array<infer R> ? R : never

// 将storeStateType的一级key转成元祖
type firstStateKey = unionToUnionTurple<keyof storeStateType>

declare interface storeStateType {
  theme: {
    theme: 'dark' | 'light'
  }
}

// storeNameSpace 为storeStateType的一级key 为store的name 集合
declare type storeNameSpace = tupleToUnion<firstStateKey>

// storeStateKeysType 为storeStateType可取的key元祖类型 ['theme'] => {theme: 'dark' | 'light'} or ['theme','theme'] => 'dark' | 'light'
declare type storeStateKeysType = deepAllKeys<storeStateType> | firstStateKey
