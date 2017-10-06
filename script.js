function getMean(array) {
  array.reduce(function (sum, value) {
    return sum + value;
  }, 0);
}

function getMedian(array) {
  return array[Math.floor(array.length / 2)];
}

function getMode(array) {
  if (array.length === 0) {
    return null;
  }

  var modeMap = {};
  var maxCount = 1;
  var modes = [array[0]];

  for (var i = 0; i < array.length; i++) {
    var el = array[i];

    if (modeMap[el] === null) {
      modeMap[el] = 1;
    } else {
      modeMap[el]++;
    }

    if (modeMap[el] > maxCount) {
      modes = [el];
      maxCount = modeMap[el];
    }
    else if (modeMap[el] === maxCount) {
      modes.push(el);
      maxCount = modeMap[el];
    }
  }
  return modes;
}

function meanMedianMode(array) {
  var mean = getMean(array);
  var median = getMedian(array);
  var mode = getMode(array);

  return 'Mean: ' + mean + ' | ' + 'Median: ' + median + ' | ' + 'Mode: ' + mode;
}

meanMedianMode([1,2,3,4,5,6,7,6,7,8,8,8,9,1,2,8]);
