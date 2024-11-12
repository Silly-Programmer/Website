
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add event listener to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const title = button.getAttribute('data-title');
        const price = parseFloat(button.getAttribute('data-price'));

        // Add product to cart
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += 1; // Increment quantity if already in cart
        } else {
            cart.push({ id, title, price, quantity: 1 });
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});

function processOrder() {
    // Collect values from inputs (optional validation can be added here)
    const address = document.getElementById("addressInput").value;
    const card = document.getElementById("cardInput").value;
    const phone = document.getElementById("phoneInput").value;

    if (address && card && phone) {
        // Here we just alert the user to simulate processing
        alert("Order placed successfully! Your cart will now be cleared.");

        // Close the modal
        var modal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
        modal.hide();

        // Clear the cart
        clearCart();
    } else {
        alert("Please fill in all required fields.");
    }
}

// Dummy function to clear the cart
function clearCart() {
    // Replace with actual cart clearing logic
    console.log("Cart has been cleared.");
}
