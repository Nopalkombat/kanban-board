import CardData from './CardData';
import StatusColumns from './StatusColumns';

function handleLocalStorage() {
  localStorage.getItem('CardData') || localStorage.setItem('CardData', JSON.stringify(CardData));
  localStorage.getItem('StatusColumns') ||
    localStorage.setItem('StatusColumns', JSON.stringify(StatusColumns));
}

function getStorageItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setStorageItem(key, content) {
  localStorage.setItem(key, JSON.stringify(content));
}

export { handleLocalStorage, getStorageItem, setStorageItem };
