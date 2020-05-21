document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault(); // Prevents default behavior of submitting form

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  document.querySelector('#link-input').value = encrypted;
});
