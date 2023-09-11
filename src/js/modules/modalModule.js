let wrightToUsModal = document.getElementById('wrightToUsModal');
let feedbackModal = document.getElementById('feedbackModal');

// Відкриття модального вікна "wrightToUsModal"
function openWrightToUsModal() {
  wrightToUsModal.style.display = 'block';
}

// Закриття модального вікна "wrightToUsModal"
function closeWrightToUsModal() {
  wrightToUsModal.style.display = 'none';
  document.getElementById('wright-name').value = '';
  document.getElementById('wright-company').value = '';
  document.getElementById('wright-email').value = '';
  document.getElementById('wright-phone').value = '';
  document.getElementById('wright-message').value = '';
}

// Відкриття модального вікна "feedbackModal"
function openFeedbackModal() {
  feedbackModal.style.display = 'block';
}

// Закриття модального вікна "feedbackModal"
function closeFeedbackModal() {
  feedbackModal.style.display = 'none';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
}


// Функція для ініціалізації модальних вікон
function modalInit() {
  const openWrightToUsButton = document.querySelector('.openWrightToUsButton');
  const openFeedbackButton = document.querySelector('.openFeedbackButton');
  const openFeedbackButton2 = document.querySelector('.openFeedbackButton2');

  openWrightToUsButton.addEventListener('click', function (e) {
    e.preventDefault();
    openWrightToUsModal();
  });
  document.querySelector('.closeWrightToUsButton').addEventListener('click', function (e) {
    closeWrightToUsModal();
  });

  openFeedbackButton.addEventListener('click', function (e) {
    e.preventDefault();
    openFeedbackModal();
  });

  openFeedbackButton2.addEventListener('click', function (e) {
    e.preventDefault();
    closeWrightToUsModal();
    openFeedbackModal();
  });
  document.querySelector('.closeFeedbackButton').addEventListener('click', function (e) {
    closeFeedbackModal();
  });
}

export {
  modalInit
};