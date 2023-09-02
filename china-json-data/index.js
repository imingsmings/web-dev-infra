const path = require('path')
const fs = require('fs')
const https = require('https')

const baseURL = 'http://geo.datav.aliyun.com/areas_v3/bound/'
const chinaInfo = [100000, 'country', 'china', 'country']

const init = () => {
    // fetchData(...chinaInfo)
    // fetchNextLevelData('./country', './province')
    // fetchNextLevelData('./province', './city')
    // fetchNextLevelData('./city', './district')
}

/**
 * 
 * @param {string} dirPath 当前等级路径 
 * @param {string} saveDirPath 下一等级存储路径
 */
function fetchNextLevelData(dirPath, saveDirPath) {
  const dirs = fs.readdirSync(dirPath)
  dirs.forEach((dir, idx) => {
    if (dir.includes('.json')) {
      const content = fs.readFileSync(`${dirPath}/${dir}`)
      const data = JSON.parse(content.toString())
      data.features.forEach((item) => {
          const { adcode, level, childrenNum } = item.properties
          if (!fs.existsSync(`${saveDirPath}/${adcode}.json`) && childrenNum > 0) {
            fetchData(adcode, level, adcode, level)
          }
        })
    }
  })
}

/**
 * 
 * @param {number} code 区域标识码
 * @param {string} dir 存储目录
 * @param {string} name 存储名称
 * @param {string} level 等级
 */
function fetchData(code, dir, name, level) {
    const url = `${baseURL}${code}${level === 'district' ? '' : '_full'}.json`
    https.get(url, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
    
      let error;
      if (statusCode !== 200) {
        console.log(url);
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' + `Expected application/json but received ${contentType}`);
      }

      if (error) {
        console.error(error.message);
        res.resume();
        return;
      }

      res.setEncoding('utf8');

      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
          try {
              fs.writeFileSync(`./${dir}/${name}.json`, rawData)
          } catch (e) {
              console.error(e.message);
          }
      });
    })
}

init()