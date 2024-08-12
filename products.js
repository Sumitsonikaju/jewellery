// products.js

const products = [
    {
        id: 1,
        name: 'Sterling Silver Necklace',
        currentPrice: 690,
        originalPrice: 1200,
        category: 'Necklaces',
        type: 'Silver',
        shape: 'Round',
        color: 'Silver',
        material: 'Silver',
        image: './assets/products/bracelet.png',
        alt: 'Sterling Silver Necklace',
        link: 'https://example.com/sterling-silver-necklace'
    },
    {
        id: 2,
        name: 'Silver Ganesh Rakhi',
        currentPrice: 995,
        originalPrice: 1500,
        category: 'Rakhis',
        type: 'Silver',
        shape: 'Round',
        color: 'Silver',
        material: 'Silver',
        image: './assets/products/image.png',
        alt: 'Silver Ganesh Rakhi',
        link: 'https://www.flipkart.com/ace-mumbai-rakhi2-silver-rakhi-set/p/itm5e9b6aea01062?pid=RAKH3J6CCWFBXCHG&lid=LSTRAKH3J6CCWFBXCHG4IKTML&marketplace=FLIPKART&q=ACE+Mumbai+&store=search.flipkart.com&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=820723c2-b9a8-4d3b-ae07-ec26b8e6d123.RAKH3J6CCWFBXCHG.SEARCH&ppt=sp&ppn=sp&ssid=eqe3kq8ots0000001723404461162&qH=2f328d293366a3b2'
    },
    {
        id: 3,
        name: 'Gold Hoop Earrings',
        currentPrice: 3495,
        originalPrice: 4995,
        category: 'Earrings',
        type: 'Gold',
        shape: 'Oval',
        color: 'Gold',
        material: 'Gold',
        image: './assets/products/earrings.png',
        alt: 'Gold Hoop Earrings',
        link: 'https://example.com/gold-hoop-earrings'
    },
    {
        id: 4,
        name: 'Platinum Bracelet',
        currentPrice: 5995,
        originalPrice: 7995,
        category: 'Bracelets',
        type: 'Platinum',
        shape: 'Round',
        color: 'Platinum',
        material: 'Platinum',
        image: './assets/products/bracelet.png',
        alt: 'Platinum Bracelet',
        link: 'https://example.com/platinum-bracelet'
    },
    {
        id: 5,
        name: 'Silver Rakhi',
        currentPrice: 795,
        originalPrice: 1200,
        category: 'Rakhis',
        type: 'Silver',
        shape: 'Square',
        color: 'Silver',
        material: 'Silver',
        image: './assets/products/rakhi.png',
        alt: 'Silver Rakhi',
        link: 'https://example.com/silver-rakhi'
    }
];

function calculateDiscountPercentage(currentPrice, originalPrice) {
    if (originalPrice === 0) return 0; // Avoid division by zero
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

function addProduct(product) {
    products.push(product);
    renderProducts();
}

function removeProduct(id) {
    products = products.filter(product => product.id !== id);
    renderProducts();
}

function renderProducts(filteredProducts = products) {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) {
        console.error('Element with class "product-grid" not found.');
        return;
    }

    productGrid.innerHTML = ''; // Clear existing products

    filteredProducts.forEach(product => {
        const discountPercentage = calculateDiscountPercentage(product.currentPrice, product.originalPrice);

        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.alt}">
            <h3>${product.name}</h3>
            <p class="price">
                <span class="current-price">₹${product.currentPrice}</span>
                <span class="original-price">₹${product.originalPrice}</span>
                <span class="discount">${discountPercentage}% off</span>
            </p>
            <a href="${product.link}" class="btn btn-primary" target="_blank">Buy Now</a>
        `;

        productGrid.appendChild(productDiv);
    });
}

// Expose products and renderProducts to global scope
window.products = products;
window.renderProducts = renderProducts;

// Ensure renderProducts is called once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderProducts();

    // Add event listeners to filters
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });
});
