import { computed, type ComputedRef } from "vue";
export function splitProps<T extends Record<string, any>>(props: T): {
  [key in keyof T]: ComputedRef<T>
} {
  const res: any = {}
  for (const key in props) {
    res[key] = computed(() => props[key])
  }
  return res
}
