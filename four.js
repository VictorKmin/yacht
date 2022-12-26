function loadGrain(levels) {
  if (levels.length <= 2) {
    return 0;
  }

  const maxNumber = Math.max(...levels);
  let highLevel = levels[0];
  let corn = 0;

  while (levels.length >= 1) {
    if (highLevel === maxNumber) {
      levels.reverse();
      highLevel = levels[0];
    }

    highLevel < levels[0] ? highLevel = levels[0] : corn = corn + (highLevel - levels[0]);
    levels.shift();
  }
  return corn;
}

module.exports = loadGrain;
