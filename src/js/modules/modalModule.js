// Функція для відкриття модального вікна
export function openModal() {
  let modal = document.getElementById('feedbackModal');
  modal.style.display = 'block';
}

// Функція для закриття модального вікна
export function closeModal() {
  let modal = document.getElementById('feedbackModal');
  modal.style.display = 'none';
}