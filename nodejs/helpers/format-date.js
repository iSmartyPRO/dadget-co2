module.exports = () => {
  const dateObj = new Date()
  return {
    year: dateObj.getUTCFullYear().toString(),
    month: dateObj.getMonth() + 1 < 10 ? ('0' + (dateObj.getMonth() + 1).toString()) : (dateObj.getMonth() + 1).toString(),
    day: dateObj.getUTCDate() < 10 ? '0' + dateObj.getUTCDate().toString() : dateObj.getUTCDate().toString
  }
}