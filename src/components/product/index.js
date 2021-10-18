const product = (productItem) => {
  const productList = productItem.map((item) => {
    console.log(item, 'item')
    const favorite = item.staff_favorite
    return `
      <div class="product__item ${favorite ? 'is-favorite' : ''}">
        <span class="product__start"
          style=" ${favorite ? 'display:block' : ''}">✨ Staff favorite
        </span>
        <div class="product__img">
          <img src="${item.url}" alt="${item.name}" />
        </div>
        <div class="product__info">
          <h2 class="product__name">${item.name}</h2>
          <div class="product__pricing">
            <span>$ ${item.price}</span>
            <ul class="product__aditional-info">
            <li class="product__info-toxicity">
              <i class="${item.toxicity}">  </i>
            </li>
              <li class="product__info-sun">
                <i class="${item.sun}"> </i>
              </li>
              <li class="product__info-water">
                <i class="${item.water}"> </i>
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
