const productsContainer = document.getElementById("products");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

function renderProducts() {

    productsContainer.innerHTML = "";

    let currentCategory = "";

    products.forEach(product => {

        // Заголовок раздела
        if (product.category !== currentCategory) {

            currentCategory = product.category;

            const title = document.createElement("h2");
            title.className = "category-title";
            title.textContent = currentCategory;

            productsContainer.appendChild(title);
        }

        // Карточка
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

                <p style="font-size:22px;font-weight:bold;">
                    ${product.price}
                </p>
            `;

            modal.style.display = "block";
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

renderProducts();
