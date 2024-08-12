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
        link: 'https://example.com/silver-ganesh-rakhi'
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
    },
    
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

function renderProducts(filteredProducts) {
    const productGrid = document.querySelector('.product-grid');
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

function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const type = document.getElementById('type-filter').value;
    const shape = document.getElementById('shape-filter').value;
    const color = document.getElementById('color-filter').value;
    const material = document.getElementById('material-filter').value;

    const filteredProducts = products.filter(product => {
        return (category === 'All' || product.category === category) &&
               (type === 'All' || product.type === type) &&
               (shape === 'All' || product.shape === shape) &&
               (color === 'All' || product.color === color) &&
               (material === 'All' || product.material === material);
    });

    renderProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderProducts(products);

    // Add event listeners to filters
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });
});
