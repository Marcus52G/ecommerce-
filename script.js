let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");

    cartItems.innerHTML = ""; // Clear existing items
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalDisplay.textContent = `Total: $${total}`;
}
