function loadGrain(levels) {

  if (levels.length <= 2) return 0;

  const max = Math.max(...levels);
  let arr = [];

  for (let i = 0; i < levels.length; i++) {

    const prevBlock = levels[i - 1];
    const nextBlock = levels[i + 1];

    if (levels[i] < prevBlock && prevBlock !== undefined && nextBlock !== undefined) {

      let needValue = prevBlock - levels[i];

      if ((needValue + levels[i]) >= max) {
        needValue = max - 1;
        arr.push(needValue - levels[i]);
        levels[i] = needValue;
      } else {
        levels[i] += needValue;
        arr.push(needValue);
      }
    }

  }

  if (arr.length !== 0) {
    return arr.reduce((acc, value) => acc + value);
  } else return 0;
}

module.exports = loadGrain;
