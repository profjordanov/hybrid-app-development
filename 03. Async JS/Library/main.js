import {
  setupEventListeners,
  showView,
} from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  initializeApp();
});


function initializeApp() {
  showView('viewHome'); // Or any other default view for logged users
}