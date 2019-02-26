const getFirstSelector = (selector) => {
  return document.querySelector(selector);
}

const nestedTarget = () => {
  return document.querySelector('#nested .target');
}

const increaseRankBy = (n) => {
  const ranks = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < ranks.length; ++i) {
    let temp = ranks[i].innerHTML;
    temp = parseInt(temp);
    temp += n;
    ranks[i].innerHTML = temp.toString();
  }
}

const deepestChild = () => {
  const div = document.querySelector('div#grand-node');
  let deepest = div;
  let temp = div;
  while (temp) {
    temp = deepest.querySelector('div');
    if (temp) {
      deepest = temp;
    }
  }
  return deepest;
}