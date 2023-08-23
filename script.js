import products from "./data.js";
import { displayProducts, displayBtns} from './displayFeatures.js';

window.addEventListener("DOMContentLoaded", function () {
    displayProducts(products);
    displayBtns(products);
  
  });
  const inputField = document.querySelector('.input-form');
  inputField.addEventListener('keyup', function(e) {
    const userInput = e.target.value.toLowerCase();
    
    const filteredProducts = products.filter(product => 
      product.title.toLowerCase().includes(userInput)
    );
    
    displayProducts(filteredProducts);
  });


