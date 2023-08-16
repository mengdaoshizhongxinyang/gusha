export type Merge<A, B> = {
  [key in keyof (A & B)]: key extends keyof B ? B[key] : key extends keyof A ? A[key] : never
}
