export const addProductToCart = (valid, product, addToCart) => {
  if (valid) {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  } else if (product.attributes.length === 0) {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  } else {
    alert("Select all attributes!");
  }
};
