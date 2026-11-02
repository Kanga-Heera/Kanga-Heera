'use strict';
const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-category]')];
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  let shown = 0;
  cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; if (!card.hidden) shown++; });
  document.querySelector('#filter-status').textContent = `${shown} field notes shown.`;
}));
