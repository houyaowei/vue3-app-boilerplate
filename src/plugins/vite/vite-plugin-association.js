/**
 * ios 分享文件管理
 */
const fs = require('fs')
const path = require("path")

const TARGET = 'apple-app-site-association'
const ORIGIN = '../../../' + TARGET
const OUTPUTTARGET = '../../../dist/.well-known'

const toWriteFile = () => {
  fs.chmodSync(path.resolve(__dirname,OUTPUTTARGET), '0755')
  fs.readFile(path.resolve(__dirname,ORIGIN),function(err,data){
    if(err) {
      return console.error(err)
    }
    console.log('read file stream closed!')
    fs.writeFileSync(path.resolve(__dirname, OUTPUTTARGET + '/'+TARGET ),data)
    console.log('write file successfully!')
  })
}
export default function VitePluginAssociation() {
  return {
    name: 'vite-plugin-association',
    apply: 'build',
    closeBundle() {
      try {
        fs.statSync(path.resolve(__dirname,OUTPUTTARGET))
        toWriteFile()
      } catch (error) {
        // 如果没有目录先创建，再开始写文件
        fs.mkdir(path.resolve(__dirname,OUTPUTTARGET), err => {
         if(err) {
           return console.error(err);
         }
         console.log('Directory created successfully!');
         toWriteFile()
        })
      }
    }
  }
}



