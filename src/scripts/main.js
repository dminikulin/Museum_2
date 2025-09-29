/* eslint-disable operator-linebreak */
'use strict';

function initHover() {
  const langBlockSelector = '.top-bar__language';

  document.querySelectorAll(langBlockSelector).forEach((langBlock) => {
    const dropdown = langBlock.querySelector('.top-bar__language--options');
    const arrow = langBlock.querySelector('.icon--dropdown');

    if (!dropdown) {
      return;
    }

    langBlock.addEventListener('mouseenter', () => {
      langBlock.classList.add('top-bar__language--active');

      if (arrow) {
        arrow.classList.add('icon--dropdown--rotated');
      }
    });

    langBlock.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!dropdown.matches(':hover') && !langBlock.matches(':hover')) {
          langBlock.classList.remove('top-bar__language--active');

          if (arrow) {
            arrow.classList.remove('icon--dropdown--rotated');
          }
        }
      }, 100);
    });

    dropdown.addEventListener('mouseenter', () => {
      langBlock.classList.add('top-bar__language--active');

      if (arrow) {
        arrow.classList.add('icon--dropdown--rotated');
      }
    });

    dropdown.addEventListener('mouseleave', () => {
      langBlock.classList.remove('top-bar__language--active');

      if (arrow) {
        arrow.classList.remove('icon--dropdown--rotated');
      }
    });

    dropdown.querySelectorAll('li').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();

        const selectedLang = item.dataset.lang || item.textContent;
        const langLabel = langBlock.querySelector('span');

        if (langLabel) {
          langLabel.textContent = selectedLang;
        }

        langBlock.classList.remove('top-bar__language--active');

        if (arrow) {
          arrow.classList.remove('icon--dropdown--rotated');
        }
      });
    });
  });
}

const overlay = document.querySelector('.page__overlay');
const menu = document.querySelector('.page__menu');
const menuButton = document.querySelector('.icon--menu');
const closeButton = document.querySelector('.icon--close');

function openMenu() {
  menu.classList.add('open');
  overlay.classList.add('active');
}

function closeMenu() {
  menu.classList.remove('open');
  overlay.classList.remove('active');
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

document.addEventListener('DOMContentLoaded', initHover);
