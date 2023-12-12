function fetchRandomUserInfos() {
    const apiUrl = 'https://randomuser.me/api';
    const numberOfUsers = 5;
    const url = new URL(apiUrl);
    url.searchParams.append('results', numberOfUsers);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            const userContainer = document.getElementById('userContainer');
            userContainer.innerHTML = '';

            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('userCard');

                userCard.innerHTML = `
                    <img src="${user.picture.large}" alt="User Picture">
                    <p><strong>Cell:</strong> ${user.cell}</p>
                    <p><strong>City:</strong> ${user.location.city}</p>
                    <p><strong>Postcode:</strong> ${user.location.postcode}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                `;

                userContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            console.error('Error fetching random user info:', error);
        });
}


