import axios from 'axios';
import { httpService } from './http.service.js';
const STORAGE_KEY = 'stay';

export const stayService = {
  query,
  getById,
  getTopRatedStays,
  getAverageScore,
  getAverageScoreDetails,
  // remove,
  // getEmptyCar
};

// async function query() {
//   let stays = await storageService.query(STORAGE_KEY); // 1. httpservice.get(/api/stay/)
//   if (!stays) {
//     stays = await _createDemoData();
//   }
//   return stays;
// }

async function query(filterBy) {
  try {
    const stay = await httpService.get('stay/', filterBy);
    return stay;
  } catch (err) {
    console.log('Cannot get stay', err);
  }
}

async function getById(stayId) {
  try {
    const stay = await httpService.get(`stay/${stayId}`);
    return stay;
  } catch (err) {
    console.log(err.response.status);
  }
}

async function getTopRatedStays() {
  let stays = await query();
  stays = stays.map((stay) => getAverageScore(stay));
  stays = stays.sort((stay1, stay2) => stay2.avgRate - stay1.avgRate);
  return stays.slice(0, 4);
}

function getAverageScore(stay) {
  const sumRate = stay.reviews.reduce((acc, review) => {
    return acc + review.rate;
  }, 0);
  stay.avgRate = (sumRate / stay.reviews.length).toFixed(1);
  return stay;
}

function getAverageScoreDetails(stay) {
  const sumRate = stay.reviews.reduce((acc, review) => {
    return acc + review.rate;
  }, 0);
  stay.avgRate = (sumRate / stay.reviews.length).toFixed(1);
  return stay.avgRate;
}

function _saveStaysToStorage(stays) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stays));
}
