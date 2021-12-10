// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  return result = Number(price * quantity).toFixed(2);
  // console.log(typeof result);
  // const resultDisplay = product.querySelector('.subtotal span');
  // resultDisplay.textContent = result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  const allProducts = document.getElementsByClassName('product');
  const finalDisplay = document.querySelector('#total-value span');
  let finalResult = 0;
  [...allProducts].forEach((product) => {
    const subtotal = product.querySelector('.subtotal span');
    subtotal.textContent = updateSubtotal(product);
    console.log(typeof subtotal.textContent);
    finalResult += Number(subtotal.textContent);
    finalDisplay.textContent = Number(finalResult).toFixed(2);
  } );

  console.log(allProducts);
  
  
  

  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.getElementsByClassName('btn btn-remove');
  console.log(removeBtn);
  // Array.from(removeBtn).forEach((elem) => elem.addEventListener('click', removeProduct()));
});
