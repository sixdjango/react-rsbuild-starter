/**
 * @author django
 * 获取本地存储的值，如果是对象则解析，如果是字符串则直接返回
 * 注意：此方法获取的值不是响应式的，为了在非组件中使用
 * @param key
 * @returns T
 */
export function getStorage<T>(key: string, defaultValue?: T): T | undefined {
  const value = localStorage.getItem(key)
  try {
    return value ? JSON.parse(value) : defaultValue
  } catch (e) {
    return value as T
  }
}
