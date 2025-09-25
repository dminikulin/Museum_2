'use strict';

const langBlock = document.querySelector('.top-bar__language');
const dropdown = document.getElementById('lang-options');

langBlock.onclick = (e) => {
  e.stopPropagation();
  dropdown.style.display = 'block';
};

dropdown.querySelectorAll('li').forEach((item) => {
  item.onclick = (e) => {
    dropdown.style.display = 'none';
    e.stopPropagation();
  };
});

document.addEventListener('click', (e) => {
  if (!langBlock.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});
