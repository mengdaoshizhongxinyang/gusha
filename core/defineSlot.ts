import { type VNode, getCurrentInstance, type VNodeChild } from "vue";
export function defineSlot<S extends Record<string, any[]>>() {
  const proxy = getCurrentInstance()?.proxy
  if (proxy) {
    return proxy.$slots as unknown as Partial<{
      [key in keyof S]: (...args: S[key]) => VNodeChild
    }>
  } else {
    throw Error()
  }
}
