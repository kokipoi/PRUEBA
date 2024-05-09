let cart = [];

function showCart() {
    const cartItemsModal = document.getElementById("cartModal");
    cartItemsModal.innerHTML = "";
    if (cart.length === 0) {
        cartItemsModal.innerHTML = "<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-body'>El carrito está vacío</div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Cerrar</button></div></div></div>";
    } else {
        // Tu función showCart() continua aquí...
    }
    $('#cartModal').modal('show');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

const products = [
    { id: 1, imga: "img/perritos.jpg" , name: "Perritos", price: 100, link: "perritos.html" },
    { id: 2, imga: "img/whengato.jpg", name: "Gatitos", price: 200, link: "gatitos.html" },
    { id: 3, imga: "img/pajarito.jpg", name: "Pajaritos", price: 300, link: "pajarito.html" }
];  

function displayProducts() {
    const productsDiv = document.getElementById("products");
    products.forEach(product => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-3");
        col.innerHTML = `
            <div class="card">
                <img src="${product.imga}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Precio: $${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Agregar al Carrito</button>
                    <a href="${product.link}" class="btn btn-secondary">Detalles</a>
                </div>
            </div>
        `;
        productsDiv.appendChild(col);
    });
}
window.onload = function() {
    displayProducts();
};
