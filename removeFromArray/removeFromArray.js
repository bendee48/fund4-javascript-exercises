const removeFromArray = function(arr, ...items) {
  for (let i = 0; i < items.length; i++) {
    let ind = arr.indexOf(items[i]);
    if (ind === -1) continue;
    arr.splice(ind, 1);
  }
  return arr;
}

module.exports = removeFromArray
