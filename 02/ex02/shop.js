
document.addEventListener("DOMContentLoaded", function() {
    const shopContainer = document.getElementById('shop-container');
    const listContainer = document.getElementById('list-container');
    const toggleButton = document.getElementById('toggleView');

    let isCardView = true;

    toggleButton.addEventListener('click', function() {
        isCardView = !isCardView;
        if (isCardView) {
            toggleButton.textContent = 'List View'; // Change button text to "List View"
            shopContainer.style.display = 'block';
            listContainer.style.display = 'none';
        } else {
            toggleButton.textContent = 'Card View'; // Change button text back to "Card View"
            shopContainer.style.display = 'none';
            listContainer.style.display = 'block';
        }
    });

    fetch('store.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const productHtml = `
                    <div class="card">
                        <img src="${item.image}" alt="${item.title}">
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                        <p>Category: ${item.category}</p>
                        <p>Price: <span>$${item.price}</span></p>
                    </div>
                `;

                const listItemHtml = `
                    <div class="list-item">
                        <img src="${item.image}" alt="${item.title}">
                        <div>
                            <p>ID: ${item.id}</p>
                            <p>${item.title}</p>
                            <p>Category: ${item.category}</p>
                            <p>Price: <span>$${item.price}</span></p>
                        </div>
                    </div>
                `;

                shopContainer.innerHTML += productHtml;
                listContainer.innerHTML += listItemHtml;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});


// document.addEventListener("DOMContentLoaded", function() {
//     fetch('store.json')
//         .then(response => response.json())
//         .then(data => {
//             const container = document.getElementById('shop-container');
//             data.forEach(item => {
//                 container.innerHTML += `
//                     <div class="card">
//                         <img src="${item.image}" alt="${item.title}">
//                         <h2>${item.title}</h2>
//                         <p>${item.description}</p>
//                         <p>Category: ${item.category}</p>
//                         <p>Price: <span>$${item.price}</span></p>
//                     </div>
//                 `;
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });
