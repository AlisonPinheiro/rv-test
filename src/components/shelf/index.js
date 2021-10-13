import product from '../product'
let $$ = document.querySelector.bind(document)

const shelf = (data) => {
  const produtList = product(data)
  $$('.shelf__no-results').style.display = 'none'
  $$('.shelf__products').innerHTML = `
    <div class="shelf__head">
      <img src="/images/illustrations/pick.png" alt="leave in hand" />
      <h3>Our Picks for yout</h3>
    </div>
    <div class="shelf__product-list">
      ${produtList.join('')}
    </div>

  `
}

export default shelf
