const initApp = () => {

  // Handle toggle mobile view
  const hambugerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')
  const form = document.getElementById('contactForm')
  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('openmenu')

  }

  hambugerBtn.addEventListener('click', toggleMenu)
  mobileMenu.addEventListener('click', toggleMenu)

  // Handle year in copyright

  const currentYear = new Date().getFullYear()
  const yearEl = document.getElementsByClassName('year')
  yearEl[0].innerText = currentYear
  yearEl[1].innerText = currentYear

  // Handle submitting form

  const handleSubmit = (e) => {
    e.preventDefault()
    form.reset()
    alert("Thanks! We will conact you soon!")
  }

  form.addEventListener('submit', handleSubmit)


}

document.addEventListener('DOMContentLoaded', initApp)