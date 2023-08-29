import { Merge } from './share';
import { type VNode, getCurrentInstance, VNodeChild } from "vue";

export function renderWith<
  V extends (...args: any[]) => VNodeChild,
  E extends Record<string, unknown> = {},
  Emit extends (...args: any[]) => any = (...args: any[]) => any,
  Slots extends Record<string, (...args: any[]) => VNodeChild> = {}
>(h: V, more: E & { $emit?: Emit, $slots?: Slots }) {
  const proxy = getCurrentInstance()?.proxy
  if (proxy) {
    const { $emit, $slots, ...exposed } = more
    Object.assign(proxy, exposed || {})
    return h as unknown as ((...args: Parameters<V>) => (ReturnType<V> & E & {
      $emit: Emit
      $slots: Merge<Slots, { default?: () => VNodeChild }>
    }))
  } else {
    throw Error()
  }
}
