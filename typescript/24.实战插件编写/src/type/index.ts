import { Dictionaries } from "../enum"

export type Key = string
//  过期时间
export type expire = Dictionaries.permanent | number // 永不过期/时间戳
export interface Data<T> {
  value: T,
  [Dictionaries.expire]: expire
}
export interface Result<T> {
  value: T | null,
  message: string
}

export interface StorageCls {// class 方法约束
  get: <T>(key: Key) => void
  set: <T>(key: Key, value: T, expire: expire) => void
  remove: (key: Key) => void
  clear: () => void
}