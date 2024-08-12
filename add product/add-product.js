// add-product.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-product-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('product-name').value;
        const currentPrice = parseFloat(document.getElementById('current-price').value);
        const originalPrice = parseFloat(document.getElementById('original-price').value) || 0;
        const category = document.getElementById('category').value;
        const type = document.getElementById('type').value;
        const shape = document.getElementById('shape').value;
        const color = document.getElementById('color').value;
        const material = document.getElementById('material').value;
        const image = document.getElementById('image-url').value;
        const link = document.getElementById('product-link').value;

        // Validate required fields
        if (!name || isNaN(currentPrice) || !image || !link || !category || !type || !shape || !color || !material) {
            alert('Please fill out all required fields.');
            return;
        }

        // Generate a new ID for the product
        const newId = window.products.length ? window.products[window.products.length - 1].id + 1 : 1;

        // Add new product to the products array
        const newProduct = {
            id: newId,
            name,
            currentPrice,
            originalPrice,
            category,
            type,
            shape,
            color,
            material,
            image,
            alt: name,
            link
        };
        window.products.push(newProduct);

        // Clear form fields
        form.reset();

        // Re-render products
        if (typeof window.renderProducts === 'function') {
            window.renderProducts();
        } else {
            console.error('renderProducts function is not defined.');
        }

        // Optionally, you can redirect or show a success message
        alert('Product added successfully!');
    });
});
