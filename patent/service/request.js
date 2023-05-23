/**
 * @description 获取原始数据
 * @param {*} url 
 * @param {*} params 
 */
export function getOriginalData(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options).then((res) => {
      return res.json()
    }).then((data) => {
      resolve(data)
    })
  })
}

/**
 * @description 修改数据
 * @param {*} url 
 * @param {*} options 
 */
export function updateData(url, options) {
  options.method = 'PUT'
  return new Promise((resolve, reject) => {
    fetch(url, options).then((res) => {
      return res.json()
    }).then((data) => {
      resolve(data)
    })
  })
}

/**
 * other backend api
 */