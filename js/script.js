// Fetch products from the fake API
async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
}

// Fetch recent properties from the fake API (or another source)
async function fetchRecentProperties() {
    const response = await fetch('https://fakestoreapi.com/products'); // You can replace this with a different endpoint if needed
    const products = await response.json();
    return products.slice(0, 5); // Assuming we want the first 5 recent properties
}

// Fetch a single product by ID
async function fetchProductById(productId) {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await response.json();
    return product;
}

// Display products on products.html

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-list')) {
        fetchProducts().then(products => {
            displayProducts(products);
        });
    }

    if (document.getElementById('recent-properties')) {
        fetchRecentProperties().then(properties => {
            displayRecentProperties(properties);
        });
    }

    // Display product details on product-detail.html
    if (document.getElementById('product-detail')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        if (productId) {
            fetchProductById(productId).then(product => {
                displayProductDetail(product);
            });
        }
    }

    // Update cart count on page load
    updateCartCount();
});


// Fetch products from the fake API
async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
}

// Function to display products on products.html
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear the list before adding new products

    const priceBackgroundColors = [
        'rgba(255, 99, 71, 0.1)', // Tomato
        'rgba(135, 206, 235, 0.1)', // Sky Blue
        'rgba(144, 238, 144, 0.1)', // Light Green
        'rgba(255, 215, 0, 0.1)', // Gold
        'rgba(221, 160, 221, 0.1)' // Plum
    ];

    products.forEach((product, index) => {
        const priceBgColor = priceBackgroundColors[index % priceBackgroundColors.length];

        const productCard = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100">
                    <div class="card-img-container" style="height: 200px; overflow: hidden;">
                        <a href="product-detail.html?id=${product.id}">
                            <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 100%; width: 100%; object-fit: contain;">
                        </a>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate mt-2">${product.title}</h5>
                        <div class="row mb-2 justify-content-between">
                            <div class="d-flex  my-2 text-primary">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </div>
                            <div class="col col-sm-6"> 
                                <p class="card-text p-2 rounded mb-2" style="background-color: ${priceBgColor}; font-weight: bold; display: inline-block;">
                                    $${product.price}
                                </p>
                            </div>
                        </div>

                        <div>
                         <a href="product-detail.html?id=${product.id}" class="px-3 btn btn-primary rounded-pill mt-auto" style="display: inline-block;">View Details</a>
           
                        </div>
                                </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

// Filter products by name
function filterProducts(products) {
    const filterInput = document.getElementById('product-filter');
    const productList = document.getElementById('product-list');

    filterInput.addEventListener('input', () => {
        const filterValue = filterInput.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(filterValue)
        );
        displayProducts(filteredProducts);
    });
}

// Fetch products and set up the filtering
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-list')) {
        fetchProducts().then(products => {
            displayProducts(products);
            filterProducts(products); // Set up filtering
        });
    }

    // ... other event listeners and code ...
});


// Variables to control the number of visible properties
let currentPropertiesCount = 6; // Number of properties to show initially
let allProperties = []; // To store all fetched properties

// Fetch recent properties from the fake API (or another source)
async function fetchRecentProperties() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    allProperties = products; // Store all products for later use
    return products.slice(0, currentPropertiesCount); // Show only the initial properties
}

// Display recent properties
function displayRecentProperties(properties) {
    const recentPropertiesList = document.getElementById('recent-properties');
    recentPropertiesList.innerHTML = ''; // Clear existing properties

    const priceBackgroundColors = [
        'rgba(255, 99, 71, 0.1)', // Tomato
        'rgba(135, 206, 235, 0.1)', // Sky Blue
        'rgba(144, 238, 144, 0.1)', // Light Green
        'rgba(255, 215, 0, 0.1)', // Gold
        'rgba(221, 160, 221, 0.1)' // Plum
    ];

    properties.forEach((property, index) => {
        const priceBgColor = priceBackgroundColors[index % priceBackgroundColors.length];

        const propertyCard = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100">
                    <div class="card-img-container" style="height: 200px; overflow: hidden;">
                        <img src="${property.image}" class="card-img-top" alt="${property.title}" style="height: 100%; width: 100%; object-fit: contain;">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate mt-2">${property.title}</h5>
                        <div class="row mb-2 justify-content-between">
                            <div class="d-flex mb-3 my-2 text-primary">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </div>
                            <div class=""> 
                                <p class="card-text py-1 px-5 btn btn-primary rounded-pill mb-2" style="font-weight: bold; cursor: default;">
                                    $${property.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        recentPropertiesList.innerHTML += propertyCard;
    });

    // Update the button visibility
    updateExploreButtons();
}

// Update Explore More/Less button visibility
function updateExploreButtons() {
    const exploreMoreButton = document.getElementById('explore-more');
    const exploreLessButton = document.getElementById('explore-less');
    
    if (currentPropertiesCount >= allProperties.length) {
        exploreMoreButton.style.display = 'none'; // Hide if all properties are displayed
        exploreLessButton.style.display = 'block'; // Show Explore Less if all are displayed
    } else {
        exploreMoreButton.style.display = 'block'; // Show Explore More
        exploreLessButton.style.display = 'none'; // Hide Explore Less
    }
    
}

// Function to show more properties
function showMoreProperties() {
    currentPropertiesCount += 3; // Show 3 more properties
    const newProperties = allProperties.slice(0, currentPropertiesCount);
    displayRecentProperties(newProperties);
}

// Function to show less properties
function showLessProperties() {
    const originalCount = 6; // Default number of properties to display
    const smoothCollapseDuration = 300; // Duration for the smooth collapse effect in milliseconds

    const recentPropertiesList = document.getElementById('recent-properties');
    const cards = recentPropertiesList.getElementsByClassName('col-md-4');
    const cardsToRemove = Array.from(cards).slice(originalCount);

    // Animate the removal of extra cards
    cardsToRemove.forEach((card) => {
        card.style.transition = `opacity ${smoothCollapseDuration}ms ease-out`;
        card.style.opacity = '0'; // Fade out the card

        setTimeout(() => {
            card.remove(); // Remove the card from the DOM after the animation completes
        }, smoothCollapseDuration);
    });

    currentPropertiesCount = originalCount; // Reset the count to default
    const newProperties = allProperties.slice(0, currentPropertiesCount);

    // Add the remaining cards back after the smooth collapse
    setTimeout(() => {
        displayRecentProperties(newProperties);
        // Reset the opacity of the remaining cards to ensure they are visible
        Array.from(recentPropertiesList.getElementsByClassName('col-md-4')).forEach((card) => {
            card.style.opacity = '1';
        });
    }, smoothCollapseDuration);
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('recent-properties')) {
        fetchRecentProperties().then(properties => {
            displayRecentProperties(properties);
        });
    }

    // Add click event listeners to buttons
    document.getElementById('explore-more').addEventListener('click', showMoreProperties);
    document.getElementById('explore-less').addEventListener('click', showLessProperties);
});

// Function to add items to the cart
function addToCart(id, title, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(item => item.id === id);

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1; // Increase quantity if item exists
    } else {
        cart.push({ id, title, price, quantity: 1 }); // Add new item to the cart
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
    updateCartCount(); // Update the cart count display
}

// Update the cart count display to show unique items only
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const uniqueItemCount = cart.length; // Count unique items in the cart
    cartCount.textContent = uniqueItemCount; // Update the cart count display
}


