// products.js

const products = [
    {
        id: 1,
        name: 'Silver Sterling Silver Bracelet',
        currentPrice: 2450,
        originalPrice: 3500,
        category: 'Necklaces',
        type: 'Silver',
        shape: 'Round',
        color: 'Silver',
        material: 'Silver',
        image: './assets/products/bracelet.png',
        alt: 'Sterling Silver Necklace',
        link: 'https://www.flipkart.com/ace-silver-sterling-bracelet/p/itmad03e427fecaa?pid=BBAH3K7SGZMMF4G3&lid=LSTBBAH3K7SGZMMF4G3EFK6CM&marketplace=FLIPKART&q=ACE+925&store=search.flipkart.com&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=76d891b9-1a2b-4fc1-b58e-ecf070ac8e9d.BBAH3K7SGZMMF4G3.SEARCH&ppt=sp&ppn=sp&qH=31d3cc01872a1cf5'
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
        id: 4,
        name: 'Silver Bracelet Mahadev',
        currentPrice: 2250,
        originalPrice: 3400,
        category: 'Bracelets',
        type: 'Platinum',
        shape: 'Round',
        color: 'Platinum',
        material: 'Platinum',
        image: './assets/products/bracelet.png',
        alt: 'Platinum Bracelet',
        link: 'https://www.flipkart.com/ace-silver-sterling-bracelet/p/itmad03e427fecaa?pid=BBAH3K7SGZMMF4G3&lid=LSTBBAH3K7SGZMMF4G3EFK6CM&marketplace=FLIPKART&q=ACE+925&store=search.flipkart.com&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=76d891b9-1a2b-4fc1-b58e-ecf070ac8e9d.BBAH3K7SGZMMF4G3.SEARCH&ppt=sp&ppn=sp&qH=31d3cc01872a1cf5'
    },
    {
        id: 5,
        name: 'Silver Bracelet',
        currentPrice: 3150,
        originalPrice: 4500,
        category: 'Rakhis',
        type: 'Silver',
        shape: 'Square',
        color: 'Silver',
        material: 'Silver',
        image: './assets/products/silver_bracelate.webp',
        alt: 'Silver Rakhi',
        link: 'https://www.flipkart.com/ace-silver-bracelet/p/itmfc50665f64fdf?pid=BBAH3MFP4U4GHXQK&lid=LSTBBAH3MFP4U4GHXQKR1UWKP&marketplace=FLIPKART&q=ACE+925&store=search.flipkart.com&srno=s_1_8&otracker=search&otracker1=search&fm=Search&iid=76d891b9-1a2b-4fc1-b58e-ecf070ac8e9d.BBAH3MFP4U4GHXQK.SEARCH&ppt=sp&ppn=sp&qH=31d3cc01872a1cf5'
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
