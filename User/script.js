document.addEventListener('DOMContentLoaded', () => {
    const getUsersBtn = document.getElementById('getUsersBtn');
    const cardGrid = document.querySelector('.card-grid');
  
    getUsersBtn.addEventListener('click', fetchUsers);
  
    function fetchUsers() {
      const url = 'https://reqres.in/api/users?page=1';
      cardGrid.innerHTML = '';
      getUsersBtn.disabled = true;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          cardGrid.innerHTML = '';
          data.data.forEach(user => {
            const card = createUserCard(user);
            cardGrid.appendChild(card);
          });
        })
        .catch(error => console.log(error))
        .finally(() => {
          getUsersBtn.disabled = false;
        });
    }
  
    function createUserCard(user) {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const cardInner = document.createElement('div');
      cardInner.classList.add('card-inner');
  
      const cardFront = document.createElement('div');
      cardFront.classList.add('card-front');
  
      const cardBack = document.createElement('div');
      cardBack.classList.add('card-back');
  
      const img = document.createElement('img');
      img.src = user.avatar;
      img.alt = 'User Avatar';
  
      const name = document.createElement('h3');
      name.textContent = `${user.first_name} ${user.last_name}`;
  
      const email = document.createElement('div');
      email.classList.add('email');
      email.textContent = user.email;
  
      cardFront.appendChild(img);
      cardFront.appendChild(name);
  
      cardBack.appendChild(email);
  
      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
  
      card.appendChild(cardInner);
  
      return card;
    }
  });
  