import mountShelf from '../shelf'
let $ = document.querySelectorAll.bind(document)
let $$ = document.querySelector.bind(document)

function toggleList(element) {
  const stepList = element.srcElement.parentElement.parentElement
  if (stepList.classList.contains('is-open')) {
    stepList.classList.remove('is-open')
  } else {
    stepList.classList.add('is-open')
  }
}

function allowSteps() {
  try {
    $$('.steps__box:not(.active)').classList.add('active')
  } catch (error) {
    return
  }
}

function inputOptions(element) {
  let stepList = element.srcElement.parentElement.parentElement
  const stepItem = element.srcElement.parentElement
  stepList = stepList.querySelector('.steps__item.active')
  stepList.classList.remove('active')
  stepItem.classList.add('active')
  toggleList(element)
  allowSteps()
}

function checkInputChanges() {
  $('.steps__item input').addEventListener('change', function () {
    formSubmit()
  })
}

function noResults() {
  $$('.shelf__products').style.display = 'none'
  $$('.shelf__no-results').style.display = 'block'
}

function formSubmit() {
  let sun = $$('.steps__list--sunlight .steps__item.active input').value
  let water = $$('.steps__list--wateringcan .steps__item.active input').value
  let pet = $$('.steps__list--dog .steps__item.active input').value

  const url = `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun}&water=${water}&pets=${pet}`

  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then((response) => {
      if (response.status === 404) {
        noResults()
      } else {
        mountShelf(response)
      }
    })
    .catch((error) => {
      console.error(error)
    })

  checkInputChanges()
}

function bindEvents() {
  $('.js-open-list').forEach((element) => {
    element.addEventListener('click', function (element) {
      element.preventDefault()
      toggleList(element)
    })
  })

  $('.steps__list:not(.steps__list--dog) .steps__item input').forEach(
    (element) => {
      element.addEventListener('click', function (element) {
        element.preventDefault()
        inputOptions(element)
      })
    }
  )

  $('.steps__list.steps__list--dog .steps__item input').forEach((element) => {
    element.addEventListener('click', function (element) {
      element.preventDefault()
      inputOptions(element)
      formSubmit()
    })
  })
}

bindEvents()
