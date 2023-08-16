import { getCurrentInstance } from "vue";
export function defineEmit<E extends (...args:any[])=>any=(...args:any[])=>any>(){
  const proxy = getCurrentInstance()?.proxy
  if (proxy) {
    return proxy.$emit as unknown as E
  } else {
    throw Error()
  }
}
