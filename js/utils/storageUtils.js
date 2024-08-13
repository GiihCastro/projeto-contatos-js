export function saveContacts(contactList) {
  const rows = Array.from(contactList.querySelectorAll('tr.contact-item'));
  const contacts = rows.map(row => {
    const cells = row.querySelectorAll('td.contact-info');
    return {
      name: cells[0].textContent,
      phone: cells[1].textContent,
      email: cells[2].textContent
    };
  });
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

export function loadContacts(contactList, onEdit, onDelete) {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.forEach(contact => {
    const row = createContactRow(contact, onEdit, onDelete);
    contactList.appendChild(row);
  });
}
