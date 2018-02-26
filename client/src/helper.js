export function shorten(text, maxLength) {
    var ret = text;
    if (ret.length > maxLength) {
        ret = ret.substr(0,maxLength-3) + '...';
    }
    return ret;
}

export function mostRecent(array) {
  const sortedArray = array.sort((a, b) => {
    let aDate = new Date(a.created_at);
    let bDate = new Date(b.created_at);
    return bDate - aDate;
  });
  return sortedArray[0];
}
