export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  convert,
  getDayInDd,
  getReviews,
  capitalizeTheFirstLetterOfEachWord,
  datesToDaysCount,
};

function getReviews(stay) {
  const reviews = stay.reviews;
  const stayAverage =
    reviews.reduce(function (sum, value) {
      return sum + value.rate;
    }, 0) / reviews.length;
  return stayAverage;
}

function convert(str) {
  let date = new Date(str),
    mnth = ('0' + (date.getMonth() + 1)).slice(-2),
    day = ('0' + date.getDate()).slice(-2);

  return [day, mnth, date.getFullYear()].join('/');
}

function getDayInDd() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  let newDate = `${dd}/${mm}/${yyyy}`;
  return newDate;
}

function makeId(length = 6) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

function makeLorem(size = 100) {
  var words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ];
  var txt = '';
  while (size > 0) {
    size--;
    txt += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  return txt;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function capitalizeTheFirstLetterOfEachWord(words) {
  var separateWord = words.toLowerCase().split(' ');
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
  }
  return separateWord.join(' ');
}

function datesToDaysCount (startDate, endDate){

  startDate = new Date(startDate.split('/')[2], startDate.split('/')[1] - 1, startDate.split('/')[0]);
  // console.log('startDate in function: ', startDate);
  if (endDate.includes('1970')) {
    endDate = '25/01/2022';
  }
  endDate = new Date(endDate.split('/')[2], endDate.split('/')[1] - 1, endDate.split('/')[0]);
  // console.log('endDate in function: ', endDate);

  let timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays
  
}