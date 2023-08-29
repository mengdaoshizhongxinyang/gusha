import { shallowRef, triggerRef } from "vue";
export function signal<T>(): [() => T, (val: T) => void]
export function signal<T>(val: T): [() => T, (val: T) => void]
export function signal<T>(val?: T) {
  const state = shallowRef(val)
  return [
    () => state.value,
    (val: T) => {
      state.value = val
      triggerRef(state)
    }
  ] as const
}
