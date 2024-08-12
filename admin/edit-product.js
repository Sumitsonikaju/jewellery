// Located in /admin/edit-product.js
document.addEventListener('DOMContentLoaded', () => {
    // Ensure products is loaded from products.js
    if (typeof products === 'undefined') {
        console.error('Products data is not loaded.');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (productId) {
        // Fetch the product details based on the ID
        const product = products.find(p => p.id === productId);
        if (product) {
            // Populate the form fields with product data
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
            document.getElementById('product-id').value = productId;
        } else {
            console.error(`Product with ID ${productId} not found.`);
        }
    } else {
        console.error('No product ID found in URL.');
    }

    // Handle the form submission to update the product
    document.getElementById('edit-product-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const id = parseInt(document.getElementById('product-id').value);
        const name = document.getElementById('product-name').value;
        const currentPrice = parseFloat(document.getElementById('current-price').value);
        const originalPrice = parseFloat(document.getElementById('original-price').value);
        const category = document.getElementById('category').value;
        const type = document.getElementById('type').value;
        const shape = document.getElementById('shape').value;
        const color = document.getElementById('color').value;
        const material = document.getElementById('material').value;
        const image = document.getElementById('image-url').value;
        const link = document.getElementById('product-link').value;

        // Find the product and update its details
        const productIndex = products.findIndex(p => p.id === id);
        if (productIndex !== -1) {
            products[productIndex] = {
                id,
                name,
                currentPrice,
                originalPrice,
                category,
                type,
                shape,
                color,
                material,
                image,
                link
            };
            alert('Product updated successfully!');
            window.location.href = 'admin-dashboard.html'; // Redirect back to dashboard
        } else {
            console.error(`Failed to update: Product with ID ${id} not found.`);
        }
    });
});
