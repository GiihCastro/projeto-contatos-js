import { createContactRow } from './components/contactComponent.js';
import { openModal, closeModal } from './components/modalComponent.js';
import { filterContacts, setupContactListClick } from './utils/domUtils.js';
import { saveContacts, loadContacts } from './utils/storageUtils.js';

document.addEventListener('DOMContentLoaded', () => {
  const addContactButton = document.getElementById('add-contact');
  const searchInput = document.getElementById('search');
  const contactList = document.getElementById('contact-list');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const cancelButton = document.getElementById('cancel-button');
  const saveButton = document.getElementById('save-button');
  let currentRow = null;

  function handleEdit(row) {
    openModal(modal, modalTitle, nameInput, phoneInput, emailInput, row);
    currentRow = row;
  }

  function handleDelete(row) {
    row.remove();
    saveContacts(contactList);
  }

  addContactButton.addEventListener('click', () => {
    let inputValue = searchInput.value.trim();
    if (!inputValue) return;

    let name = '';
    let phone = '';
    let email = '';

    if (inputValue.includes('@')) {
      email = inputValue;
    } else if (/^\d+$/.test(inputValue)) {
      phone = inputValue;
    } else {
      name = inputValue;
    }

    const row = createContactRow({ name, phone, email }, handleEdit, handleDelete);
    contactList.appendChild(row);
    searchInput.value = '';
    filterContacts('');
    saveContacts(contactList);
  });

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    filterContacts(query);
  });

  cancelButton.addEventListener('click', () => closeModal(modal));

  saveButton.addEventListener('click', () => {
    if (currentRow) {
      const cells = currentRow.querySelectorAll('td.contact-info');
      cells[0].textContent = nameInput.value;
      cells[1].textContent = phoneInput.value;
      cells[2].textContent = emailInput.value;
      saveContacts(contactList);
      closeModal(modal);
    }
  });

  setupContactListClick(contactList);
  loadContacts(contactList, handleEdit, handleDelete);
});
