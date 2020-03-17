
const functions = {

  caps: {
    ca: 'Ottawa',
    us: 'Washington'
  },

  arrayAdd (arr, num) {
    arr.push(Number(num))
    return arr
  },

  arrayTotal (arr) {
    let tot = 0
    for (let i = 0; i < arr.length; i++) {
      tot += arr[i]
    }
    return tot
  }
}

export default functions
