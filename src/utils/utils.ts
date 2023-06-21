// 获取当前时分, 例如: 12:30 01:02
export const getNowTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};
