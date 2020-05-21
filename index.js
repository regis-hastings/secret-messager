document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault(); // Prevents default behavior of submitting form

  const input = document.querySelector('input');

  console.log(input.value);
});
