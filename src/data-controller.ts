import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(products: Product[]): void {
    const container = document.getElementById('app');
    if (container) {
        container.innerHTML = ''; // Clear previous content
        products.forEach(product => {
            const productHTML = generateProductHTML(product);
            container.innerHTML += productHTML;
        });
    }
}


function getByCategory(products: Product[], category: string): Product[] {
    return products.filter(product => product.category === category);
}

function getByRating(products: Product[], minRating: number): Product[] {
    return products.filter(product => product.rating >= minRating);
}


export { renderProducts, getByCategory, getByRating };