const product = (productItem) => {
  console.log(productItem, 'productItem')
  const productList = productItem.map((item) => {
    console.log(item, 'item')
    return `
      <div class="product__item">
        <img src="${item.url}" alt="${item.name}" />
        <div class="product__info">
          <h2 class="product__name">${item.name}</h2>
          <div class="product__pricing>
            <span>$${item.price}</span>
            <ul class="product__aditional-info">
              <li class="product__info-sun">
                <icon> ${item.sun} </icon>
              </li>
              <li class="product__info-toxicity">
                <icon> ${item.toxicity} </icon>
              </li>
              <li class="product__info-water">
                <icon> ${item.water} </icon>
              </li>

            </ul>
          </div>
        </div>
      </div>
    `
  })

  return productList
}

export default product
