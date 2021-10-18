import product from '../product'
import image from '/images/illustrations/pick.png'
import arrowUp from '/images/icons/arrow-up.svg'

let $$ = document.querySelector.bind(document)

const shelf = (data) => {
  const produtList = product(data)
  $$('.shelf__no-results').style.display = 'none'
  $$('.shelf__products').innerHTML = `
    <div class="shelf__head">
      <img src="${image}" alt="leave in hand" />
      <h3>Our Picks </br> for yout</h3>
    </div>
    <div class="shelf__product-list">
      ${produtList.join('')}
    </div>

    <button class='button button--ghost>
      <i>${arrowUp}</i>
      <span>back to the top</span>
    </button>
  `

  $$('.shelf__products').style.display = 'block'
}

export default shelf
