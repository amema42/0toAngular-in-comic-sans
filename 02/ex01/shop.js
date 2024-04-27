document.addEventListener("DOMContentLoaded", function() {
    fetch('store.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('shop-container');
            data.forEach(item => {
                container.innerHTML += `
                    <div class="card">
                        <img src="${item.image}" alt="${item.title}">
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                        <p>Category: ${item.category}</p>
                        <p>Price: <span>$${item.price}</span></p>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
