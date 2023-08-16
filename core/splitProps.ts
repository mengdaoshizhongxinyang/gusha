import { computed } from "vue";
export function splitProps<T extends Record<string, any>,K extends keyof T>(props: T, keys: K[]) {
  return computed(() => {
    const result:Record<string,any>={}
    for(let key in props){
      result[key]=props[key]
    }
    return result as Pick<T,K>
  })
}
