module.exports = {
  linearSearch: function (target, values) {
    let getNum = values.filter(function (x) {
      return target === x
    })
    return values.indexOf(getNum[0])
  },
  globalSearch: function (target, values) {
    let arr = []
    values.forEach(function (x, i) {
      if (x === target) {
        arr.push(i)
      }
    })
    return arr
  }
}
