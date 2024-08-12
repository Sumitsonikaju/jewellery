document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);

    // Add event listeners to filters
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });
});

function renderProducts(filteredProducts) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear existing products

    filteredProducts.forEach(product => {
        const discountPercentage = calculateDiscountPercentage(product.currentPrice, product.originalPrice);

        const productDiv = document.createElement('div');
        productDiv.className = 'product'; // Adjusted class for styling

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.alt}">
            <h3>${product.name}</h3>
            <p class="price">
                <span class="current-price">₹${product.currentPrice}</span>
                <span class="original-price">₹${product.originalPrice}</span>
                <span class="discount">${discountPercentage}% off</span>
            </p>
            <div class = "alter-button">
            <button class="edit-icon" data-id="${product.id}">✎</button>
            <button class="delete-icon" data-id="${product.id}">X</button>
            </div>
        `;

        productGrid.appendChild(productDiv);
    });

    // Add event listeners for edit and delete buttons
    document.querySelectorAll('.edit-icon').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            window.location.href = `edit-product.html?id=${productId}`;
        });
    });

    document.querySelectorAll('.delete-icon').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const product = products.find(p => p.id === parseInt(productId));
            if (confirm(`Are you sure you want to delete the product "${product.name}"?`)) {
                removeProduct(productId);
            }
        });
    });
}


function confirmDelete(id, name) {
    if (confirm(`Are you sure you want to delete the product "${name}"?`)) {
        removeProduct(id);
    }
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        // Assuming you have a form for editing somewhere on your page
        document.getElementById('product-name').value = product.name;
        document.getElementById('current-price').value = product.currentPrice;
        document.getElementById('original-price').value = product.originalPrice;
        document.getElementById('category').value = product.category;
        document.getElementById('type').value = product.type;
        document.getElementById('shape').value = product.shape;
        document.getElementById('color').value = product.color;
        document.getElementById('material').value = product.material;
        document.getElementById('image-url').value = product.image;
        document.getElementById('product-link').value = product.link;
        // Store the product ID somewhere to use in the save function
        document.getElementById('product-id').value = id;
    }
}

document.getElementById('edit-product-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const id = parseInt(document.getElementById('product-id').value);
    const updatedProduct = {
        id: id,
        name: document.getElementById('product-name').value,
        currentPrice: parseFloat(document.getElementById('current-price').value),
        originalPrice: parseFloat(document.getElementById('original-price').value),
        category: document.getElementById('category').value,
        type: document.getElementById('type').value,
        shape: document.getElementById('shape').value,
        color: document.getElementById('color').value,
        material: document.getElementById('material').value,
        image: document.getElementById('image-url').value,
        link: document.getElementById('product-link').value
    };
    updateProduct(id, updatedProduct);
});

function updateProduct(id, updatedProduct) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = updatedProduct;
        renderProducts(products);
    }
}
