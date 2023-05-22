const selectLowestPrice = (variants) => {
  let lowestPrice = Number(variants[0].price);

  for (let i = 0; i < variants.length; i++) {
    if (Number(variants[i].price) < lowestPrice) {
      lowestPrice = Number(variants[i].price);
    }
  }

  return lowestPrice;
};

export default selectLowestPrice;
