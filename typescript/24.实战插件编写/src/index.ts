//  expire 过期时间key  permanent 永久不过期
import { StorageCls, Key, expire, Data, Result } from "./type/index"
import { Dictionaries } from "./enum"

export class Storage implements StorageCls {

  get <T>(key: Key): Result<T | null> {
    const value = localStorage.getItem(key)
    if (value) {
      const data: Data<T> = JSON.parse(value)
      const nowTime = new Date().getTime()
      //  过期时间是数字类型 并且过期 进行删除和提示
      if (typeof data[Dictionaries.expire] == 'number' && data[Dictionaries.expire] < nowTime) {
        //  移除
        this.remove(key)
        return {
          message: `您的${key}已过期`,
          value: null
        }
      } else {
        return {
          message: `成功读取`,
          value: data.value
        }
      }
    } else {
      //  否则key无效
      console.warn('key 值无效');
      return {
        message: 'key 值无效',
        value: null
      }
    }
  }
  
  //  存储过期时间 默认永久
  set <T>(key: Key, value: T, expire: expire = Dictionaries.permanent) {
    const data = {
      value,
      [Dictionaries.expire]: expire
    }
    localStorage.setItem(key, JSON.stringify(data))
  }

  remove (key: Key) {
    localStorage.removeItem(key)
  }

  clear () {
    localStorage.clear()
  }

}