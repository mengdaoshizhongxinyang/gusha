import { computed, type ComputedRef } from "vue";
interface Prop<T>{
  <V extends T>(def:V):V
  readonly value:T
}
export function splitProps<T extends Record<string, any>>(props: T): {
  [key in keyof Required<T>]: Prop<T[key]>
} {
  const res: any = {}
  for (const key in props) {
    const comp=computed(()=>props[key])
    const prop=(def:T[typeof key])=>{
      return comp.value || def
    }
    Object.defineProperty(prop,'value',{
      get(){
        return comp.value
      }
    })
    res[key] = prop
  }
  return res
}
