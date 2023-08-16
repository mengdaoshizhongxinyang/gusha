import { type VNode, getCurrentInstance } from "vue";
export function defineSlot<S extends Record<string, (...args: any[]) => any>>(){
  const proxy = getCurrentInstance()?.proxy
  if (proxy) {
    return proxy.$slots as unknown as Partial<S>
  } else {
    throw Error()
  }
}
