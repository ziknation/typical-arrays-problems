
exports.min = function min (array) {
    if (array == undefined) return 0;
    if (array.length === 1) return array[0];
    if (array.length >= 2){
      let min = array[0];
      for (let i = 1; i <= array.length - 1; i++){
        if (array[i] < min){
          min = array[i];
        }
      }
      return min;
    }
    return 0;
  }
  
  exports.max = function max (array) {
    if (array == undefined) return 0;
    if (array.length === 1) return array[0];
    if (array.length >= 2){
      let max = array[0];
      for (let i = 1; i <= array.length - 1; i++){
        if (array[i] > max){
          max = array[i];
        }
      }
      return max;
    }
    return 0;
  }
  
  exports.avg = function avg (array) {
    if (array == undefined) return 0;
    if (array.length >= 1){
      let sum = 0;
      for (let i = 0; i <= array.length - 1; i++){
        sum += array[i];
      }
      let avg = sum / array.length;
      return avg;   
    }
    return 0;
  }
  