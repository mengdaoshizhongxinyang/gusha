import { Merge } from './share';
import { type VNode, getCurrentInstance } from "vue";

export function renderWith<
  V extends (...args: any[]) => VNode,
  E extends Record<string, unknown> = {},
  Emit extends (...args: any[]) => any = (...args: any[]) => any,
  Slots extends Record<string, (...args: any[]) => VNode> = {}
>(h: V, more: E & { $emit?: Emit, $slots?: Slots }) {
  const proxy = getCurrentInstance()?.proxy
  if (proxy) {
    const { $emit, $slots, ...exposed } = more
    Object.assign(proxy, exposed || {})
    return h as unknown as ((...args: Parameters<V>) => (ReturnType<V> & E & {
      $emit: Emit
      $slots: Partial<Merge<Slots, { default: () => VNode }>>
    }))
  } else {
    throw Error()
  }
}
