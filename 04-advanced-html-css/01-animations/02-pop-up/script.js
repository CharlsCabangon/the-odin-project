const dialog = document.getElementById("dialog");

document.getElementById("btn-open").addEventListener('click', () => {
  dialog.showModal();
  dialog.classList.add("show")
});

document.getElementById("btn-close").addEventListener('click', () => {
  dialog.classList.remove("show");

  setTimeout(() => {
    dialog.close();
  }, 300);
});
