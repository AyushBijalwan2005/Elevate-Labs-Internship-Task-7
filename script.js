const container = document.getElementById('user-container');
const reloadBtn = document.getElementById('reload');

function loadUsers() {
  container.innerHTML = '';
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      if (!res.ok) throw new Error('Network response failed');
      return res.json();
    })
    .then(data => {
      data.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(() => {
      const error = document.createElement('div');
      error.className = 'user-card';
      error.innerHTML = `<p style="color:red;">Failed to load users. Check your internet.</p>`;
      container.appendChild(error);
    });
}

reloadBtn.addEventListener('click', loadUsers);

loadUsers();
