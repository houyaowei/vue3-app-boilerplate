/**
 * 文件帮助类
 * @param filePath
 */
const isPdf = (filePath) => {
  const _index= filePath.lastIndexOf(".")
  if (-1 != _index) {
    const ext = filePath.substring(_index+1,_index+4);
    return ext.toUpperCase() == 'PDF'
  }
  return false
};
const isUrl = (url)=> {
  return /^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(url)
}
export {
  isPdf,
  isUrl
}
