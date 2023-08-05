import { useSelector } from 'react-redux'

export function useStoreState(keys: []): storeStateType
export function useStoreState(keys?: undefined): storeStateType
export function useStoreState<T = any>(keys?: storeStateKeysType | undefined): T
export function useStoreState(keys: any) {
  const values = useSelector<storeStateType>(state => {
    function getValue(obj: storeStateType, keys: storeStateKeysType) {
      let value: storeStateType | undefined = obj

      for (let i = 0; i < keys.length; i++) {
        if (!Object.keys(value as storeStateType).includes(keys[i])) {
          value = undefined
          break
        }

        // @ts-ignore
        value = value[keys[i]]
      }

      return value
    }

    if (!keys) return state

    if (Array.isArray(keys) && keys.length === 0) return state

    if (Array.isArray(keys) && keys.length > 0) {
      return getValue(state, keys as storeStateKeysType)
    }
  })

  return values
}
