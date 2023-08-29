import "vue"
import { RenderFunction, type VNode, VNodeChild } from "vue";
declare module "vue" {
  type OverloadProps<TOverload> = Pick<TOverload, keyof TOverload>;
  type OverloadUnionRecursive<TOverload, TPartialOverload = unknown> = TOverload extends (
    ...args: infer TArgs
  ) => infer TReturn
    ? TPartialOverload extends TOverload
    ? never
    :
    | OverloadUnionRecursive<
      TPartialOverload & TOverload,
      TPartialOverload & ((...args: TArgs) => TReturn) & OverloadProps<TOverload>
    >
    | ((...args: TArgs) => TReturn)
    : never;
  type OverloadUnion<TOverload extends (...args: any[]) => any> = Exclude<
    OverloadUnionRecursive<
      (() => never) & TOverload
    >,
    TOverload extends () => never ? never : () => never
  >;

  type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
  type LastOf<T> =
    UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never

  type Push<T extends any[], V> = [...T, V];

  type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
    true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>


  type EmitFunc = (...args: any[]) => any
  type EmitUnionToProps<T extends (any)[]> =
    T extends [infer L, ...infer R]
    ? R extends (EmitFunc)[]
    ? L extends EmitFunc
    ? Parameters<L> extends [infer K, ...infer A]
    ? K extends string
    ? { [key in K as `on${Capitalize<key>}`]?: (...args: A) => any } & EmitUnionToProps<R>
    : {}
    : {}
    : {}
    : {}
    : {}

  export function defineComponent<
    P extends Record<string, any>,
    R extends RenderFunction
  >(setup: (props: P) => R): (
    props: P
      & EmitUnionToProps<TuplifyUnion<OverloadUnion<(Record<string,any>&ReturnType<R>)['$emit']>>>
      & { "v-slots"?: (Record<string,any>&ReturnType<R>)['$slots'] | (VNodeChild) }
  ) => ReturnType<R>

}

declare global {
  namespace JSX {
    interface ElementChildrenAttribute { "v-slots": {}; }
  }
}
