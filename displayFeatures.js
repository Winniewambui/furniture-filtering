//mapping products
export function displayProducts(products) {
    const productsContainer = document.querySelector(".products-container");

    const productsData = products.map((product) => {
      return `
      <article class="product">
      <img src="${product.image}" alt="image">
     
      <footer class="about-product">
          <h5 class="product-name">${product.title}</h5>
          <span class="product-price">${product.price}</span>
      </footer>
  </article>
      `;
    });
    productsContainer.innerHTML = productsData.join("");
  }
  
//mapping category buttons
 export function displayBtns(products) {
  const buttonsContainer = document.querySelector(".buttons");

  let companyButtons = ["all",...new Set(products.map((button) => button.company)),].map((company) => {
    return `
        <button class="company-btn" data-id="${company}"> ${company}</button>
                
        `;
  });
  buttonsContainer.innerHTML = companyButtons.join("");

  //filtering according to company
  let buttons = document.querySelectorAll(".company-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let company = e.currentTarget.dataset.id;

      let productCompany = products.filter((product) => {
        if (product.company === company) {
          return product;
        }
      });
      if (company === "all") {
        displayProducts(products);
      } else {
        displayProducts(productCompany);
      }
    });
  });
}
