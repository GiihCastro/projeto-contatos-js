export function openModal(modal, modalTitle, nameInput, phoneInput, emailInput, row) {
  const cells = row.querySelectorAll('td.contact-info');
  nameInput.value = cells[0].textContent;
  phoneInput.value = cells[1].textContent;
  emailInput.value = cells[2].textContent;
  modal.classList.remove('hidden');
  modalTitle.textContent = 'Editar Contato';
}

export function closeModal(modal) {
  modal.classList.add('hidden');
}
