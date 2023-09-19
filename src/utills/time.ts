//封装函数，获取当前时间判断
export const getTime = () => {
  let message = ''
  //通过构造函数Date
  let hours = new Date().getHours()
  if (hours <= 11) {
    message = '早上'
  } else if (hours <= 18) {
    message = '下午'
  } else {
    message = '晚上'
  }
  return message;
}