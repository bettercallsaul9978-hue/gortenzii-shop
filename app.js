const productsContainer = document.getElementById("products");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const toast = document.getElementById("toast");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const homeBtn = document.getElementById("homeBtn");
const cartBtn = document.getElementById("cartBtn");

const cartPage = document.getElementById("cartPage");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
function renderProducts() {

    productsContainer.innerHTML = "";

    let currentCategory = "";

    products.forEach(product => {

        if (product.category !== currentCategory) {

            currentCategory = product.category;

            const title = document.createElement("h2");
            title.className = "category-title";
            title.textContent = currentCategory;

            productsContainer.appendChild(title);
        }

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div class="card-content">
                <div class="card-title">
                    ${product.name}
                </div>

                <div class="card-price">
                    ${product.price}
                </div>
            </div>
        `;

        card.addEventListener("click", () => {

            modalBody.innerHTML = `
                <img src="${product.image}" alt="${product.name}">

                <h2 style="margin-bottom:15px;">
                    ${product.name}
                </h2>

                <p style="font-size:22px;font-weight:bold;margin-bottom:10px;">
                    ${product.price}
                </p>

                <p class="product-description">
                    ${product.description || "Описание пока не добавлено"}
                </p>

                <button id="addToCart" class="cart-btn">
                    🛒 Добавить в корзину
                </button>
            `;

            modal.style.display = "block";

           document
    .getElementById("addToCart")
    .addEventListener("click", () => {

        const exists = cart.some(
            item => item.name === product.name
        );

        if (exists) {

            showToast("Этот товар уже есть в корзине");

            return;
        }

        cart.push(product);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        renderCart();

        showToast("Товар добавлен в корзину");
});

        });

        productsContainer.appendChild(card);
    });
}



closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
function renderCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p style="font-size:18px;">
                Корзина пока пуста
            </p>
        `;

        cartTotal.innerHTML = "";

        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">

            <div class="card-content">

                <div class="card-title">
                    ${item.name}
                </div>

                <div class="card-price">
                    ${item.price}
                </div>

            </div>
        `;

        card.addEventListener("click", () => {

            modalBody.innerHTML = `

                <img src="${item.image}" alt="${item.name}">

                <h2>${item.name}</h2>

                <p style="font-size:22px;font-weight:bold;">
                    ${item.price}
                </p>

            <div class="cart-actions">

                <button id="orderBtn" class="order-btn">
                    Оформить заказ
                </button>

                <button id="removeBtn" class="remove-btn">
                    Удалить
                </button>

            </div>
            `;

            modal.style.display = "block";

            document
                .getElementById("removeBtn")
                .addEventListener("click", () => {

                    cart.splice(index, 1);

                    localStorage.setItem(
                        "cart",
                        JSON.stringify(cart)
                    );

                    modal.style.display = "none";

                    renderCart();
                });
        });

        cartItems.appendChild(card);

        total += Number(
            item.price
                .replace(/₽/g, "")
                .replace(/\s/g, "")
        );
    });

cartTotal.innerHTML = `
    <div class="cart-summary">

        <div class="cart-total-price">
            Итого: ${total.toLocaleString()} ₽
        </div>

        <button class="checkout-btn">
            Оформить заказ
        </button>

    </div>
`;
}

homeBtn.addEventListener("click", () => {

    productsContainer.style.display = "grid";
    cartPage.style.display = "none";

    homeBtn.classList.add("active");
    cartBtn.classList.remove("active");

});

cartBtn.addEventListener("click", () => {

    productsContainer.style.display = "none";
    cartPage.style.display = "block";

    homeBtn.classList.remove("active");
    cartBtn.classList.add("active");

    renderCart();

});

function showToast(text) {

    toast.textContent = text;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

renderProducts();
renderCart();
