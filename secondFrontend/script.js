const products = [
    { name: "Laptop", price: 1200, image: "christopher-gower-m_HRfLhgABo-unsplash.jpg" },
    { name: "Smartphone", price: 700, image: "sven-Q0ksjWR55Jc-unsplash.jpg" },
    { name: "Headphones", price: 100, image: "headphones.jpg" },
    { name: "Smartwatch", price: 200, image: "smartwatch.jpg" }
];

function displayProducts(productList) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    productList.forEach(product => {
        container.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${product.price}</p>
            </div>
        `;
    });
}

document.getElementById("search").addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
});

document.getElementById("sort").addEventListener("change", (e) => {
    let sortedProducts = [...products];
    if (e.target.value === "low-high") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "high-low") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(sortedProducts);
});

displayProducts(products);
