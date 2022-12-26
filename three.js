function loadGrain(levels = []) {

  if (levels.length < 3 || !Array.isArray(levels)) {
    console.log('The Boat is Shit');
    return;
  }

  const wall_1 = levels[0];
  const wall_2 = levels[levels.length - 1];
  const wallSize = (wall_1 > wall_2) ? wall_2 : wall_1;

  const cookies = levels.reduce((accum, value, index) => {
    if (index === 0 || index === (levels.length - 1)) return accum;
    return accum + (wallSize - value);
  }, 0);

  return cookies;
}

module.exports = loadGrain;
