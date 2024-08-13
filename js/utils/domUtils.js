export function filterContacts(query) {
    const rows = document.querySelectorAll('#contact-list tr.contact-item');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td.contact-info');
      const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(query));
  
      if (match) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
  
  export function setupContactListClick(contactList) {
    contactList.addEventListener('click', (event) => {
      if (window.innerWidth <= 750) {
        const contactItem = event.target.closest('.contact-item');
        if (contactItem) {
          contactItem.classList.toggle('active');
        }
      }
    });
  }
  