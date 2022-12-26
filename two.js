function loadGrain(arr) {
  let matrixArray = [];
  let copyOfArr = [...arr];
  let matrixHeight = 0;
  let capacity = 0;

  function calcHeightOfMatrix(arr) {
    for (item of [...arr]) { //вичисляємо найвишчий борт, це буде висота матриці.
      if (item > matrixHeight) {
        matrixHeight = item;
      }
    }
  }

  calcHeightOfMatrix(arr);

  function drawMatrixArr(arr) {

    function drawRaw() {
      let rawArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (copyOfArr[i] > 0) {
          rawArr.push(1);
          copyOfArr[i]--;
        } else {
          rawArr.push(0);
        }
      }
      return rawArr;
    }

    for (let raw = 0; raw !== matrixHeight; raw++) {
      matrixArray.push(drawRaw());
    }

  }

  drawMatrixArr(arr);


  function calculateTheCapacity() {
    capacity += calculateTheCapacityOfRaw();
    for (let raw = 0; raw !== matrixHeight; raw++) {


      // calculateTheCapacityOfRaw()
      // console.log('---')
    }

    function calculateTheCapacityOfRaw() {
      let capacityOfRaw = 0;
      for (raw of matrixArray) {
        let leftSide = -1;
        let rightSide = -1;
        for (let i = 0; i < raw.length; i++) {

          leftSide === -1 && raw[i] === 1 ? leftSide = i : '';
          // i ===raw.length-1 ?
          // console.log('lSide: '+leftSide) : ''
        }

        for (let i = raw.length - 1; i !== 0; i--) {

          rightSide === -1 && raw[i] === 1 ? rightSide = i : '';
          // i ===raw.length-1 ?
          // console.log('rSide: '+rightSide) : ''
        }
        // console.log('___')

// шукаємо місце для зерна в ряду і додаємо до ємності ряда
        if (leftSide !== -1 || rightSide !== -1) {
          for (let i = leftSide; i < rightSide; i++) {
            if (raw[i] === 0) {
              capacity++;
              capacityOfRaw++;
              // console.log(capacityOfRaw)
            }
          }
        }
      }
      return capacityOfRaw;
    }
  }

  calculateTheCapacity();
  // console.log(matrixArray)
  // console.log('capasity is: '+capacity)
  return capacity;
}

module.exports = loadGrain;
