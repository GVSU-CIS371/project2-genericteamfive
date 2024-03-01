import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    const mainContainer = document.getElementById('main-container');
    if (mainContainer) {
        mainContainer.innerHTML = prods.map(generateProductHTML).join('');
    } else {
        console.error('Main container not found');
    }
}

function getByCategory(category: string): void {
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

function getByRating(minRating: number): void {
    const filteredProducts = products.filter(product => product.rating > minRating);
    renderProducts(filteredProducts);
}

export { renderProducts, getByCategory, getByRating };
