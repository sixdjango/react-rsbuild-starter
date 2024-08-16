declare interface Window {
  __POWERED_BY_QIANKUN__: boolean
  pdfjsLib: any
  pdfjsWorker: any
  gapi: any
  google: any
}

/**
 * @description 深度可选
 */
type DeepPartial<T> = T extends Function
  ? T
  : T extends object
    ? { [P in keyof T]?: DeepPartial<T[P]> }
    : T

declare interface Fn<T = any, R = T> {
  (...arg: T): R
}
