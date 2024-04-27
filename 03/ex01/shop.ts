interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

document.addEventListener("DOMContentLoaded", function() {
    const shopContainer = document.getElementById('shop-container');
    const listContainer = document.getElementById('list-container');
    const toggleButton = document.getElementById('toggleView');
    const cartCount = document.getElementById('cart-count');
    let cartItemsCount = 0;

    let isCardView = true;

    //font-button
    function toggleFont() {
        console.log('Font toggle button clicked');
        const body = document.body;
        const allTextElements = document.querySelectorAll('body *');
        body.classList.toggle('comic-sans');
        body.classList.toggle('helvetica-bold');

        allTextElements.forEach(element => {
            element.classList.toggle('comic-sans');
            element.classList.toggle('helvetica-bold');
        });
    }


    // createINg font toggle button
    const fontToggleButton = document.createElement('button');
    fontToggleButton.textContent = 'Font Changer';
    fontToggleButton.id = 'toggleFont';

    // Append font toggle button to the document body
    document.body.appendChild(fontToggleButton);

    // Font toggle button event listener
    fontToggleButton.addEventListener('click', toggleFont);
    toggleButton.addEventListener('click', function() {
        isCardView = !isCardView;
        if (isCardView) {
            toggleButton.textContent = 'List View'; // change button text to "List View"
            shopContainer.style.display = 'block';
            listContainer.style.display = 'none';
        } else {
            toggleButton.textContent = 'Card View'; // change button text back to "Card View"
            shopContainer.style.display = 'none';
            listContainer.style.display = 'block';
        }
    });

    // Function to add a product to the cart
    function addToCart(product: Product) {
        cartItemsCount++;
        cartCount.textContent = cartItemsCount.toString();
        // here, may be! -> the logic to How to add to the cart
    }

    // Fetch products data from the file : store.json and ***render*** them
    fetch('store.json')
        .then(response => response.json())
        .then((data: Product[]) => {
            data.forEach(item => {
                const productHtml = `
                    <div class="card">
                        <img src="${item.image}" alt="${item.title}">
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                        <p>Category: ${item.category}</p>
                        <p>Price: <span>$${item.price}</span></p>
                        <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
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
                            <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                        </div>
                    </div>
                `;

                shopContainer.innerHTML += productHtml;
                listContainer.innerHTML += listItemHtml;
            });

            // add event listeners to "Add to Cart" buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(button.getAttribute('data-id'));
                    const product = data.find(item => item.id === productId);
                    if (product) {
                        addToCart(product);
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
