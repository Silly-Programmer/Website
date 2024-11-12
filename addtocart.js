function addToCart(event) {
    const button = event.target;
    const itemId = button.getAttribute("data-id");
    const itemTitle = button.getAttribute("data-title");
    const itemPrice = button.getAttribute("data-price");

    // Create the item object
    const item = {
        id: itemId,
        title: itemTitle,
        price: parseFloat(itemPrice),
    };

    // Retrieve existing cart items from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add new item to the cart
    cart.push(item);

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${itemTitle} has been added to your cart!`);
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});