// Coffee:  prod_SKZLS7ZpQaFze8
// sunglass: prod_SKZMHl3MAmlPPb
// camera: prod_SKZMeC78XW6sZf

const productsArray = [
  {
    id: "prod_SKZLS7ZpQaFze8",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "prod_SKZMHl3MAmlPPb",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "prod_SKZMeC78XW6sZf",
    title: "Camera",
    price: 39.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (!productData) {
    return console.log("Product data does not exit for ID");
  }
  return productData;
}

export { productsArray, getProductData };
