function calculateLevels(levels) {

  if (levels.length < 3 || (levels.length === 3 && levels[1] >= levels[0])) {
    return 0;
  }

  let maxEdge = levels[0];
  let segmentEdge = levels[0];
  let lastChecked = levels[0];
  let segmentCounter = 0;

  return levels.reduce(function (result, current) {

    if (current >= maxEdge) {
      result += (maxEdge - segmentEdge) * segmentCounter;

      maxEdge = current;
      segmentEdge = current;
      segmentCounter = 0;

    }

    if (current > lastChecked && current < segmentEdge) {
      result -= (segmentEdge - current) * segmentCounter;
      segmentEdge = current;
    } else if (current > lastChecked && current > segmentEdge) {
      result += (current - segmentEdge) * segmentCounter;
      segmentEdge = current;
    } else if (current <= segmentEdge) {
      result += (segmentEdge - current);
    }

    segmentCounter++;
    lastChecked = current;

    return result;
  }, 0);
}

module.exports = calculateLevels
