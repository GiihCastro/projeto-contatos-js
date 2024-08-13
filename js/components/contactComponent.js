export function createContactRow(contact, onEdit, onDelete) {
  const row = document.createElement('tr');
  row.classList.add('contact-item');
  row.setAttribute('draggable', 'true');

  const nameCell = document.createElement('td');
  nameCell.classList.add('contact-info');
  nameCell.textContent = contact.name;

  const phoneCell = document.createElement('td');
  phoneCell.classList.add('contact-info');
  phoneCell.textContent = contact.phone;

  const emailCell = document.createElement('td');
  emailCell.classList.add('contact-info');
  emailCell.textContent = contact.email;

  const detailsCell = document.createElement('td');
  detailsCell.classList.add('contact-details');

  const editButton = document.createElement('button');
  editButton.textContent = 'Editar';
  editButton.classList.add('editBtn');
  editButton.addEventListener('click', (event) => {
    event.stopPropagation();
    onEdit(row);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.classList.add('deleteBtn');
  deleteButton.addEventListener('click', (event) => {
    event.stopPropagation();
    onDelete(row);
  });

  detailsCell.appendChild(editButton);
  detailsCell.appendChild(deleteButton);

  row.appendChild(nameCell);
  row.appendChild(phoneCell);
  row.appendChild(emailCell);
  row.appendChild(detailsCell);

  return row;
}
