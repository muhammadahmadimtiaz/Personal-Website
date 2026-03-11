// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90)
      }
    })
  },
  { threshold: 0.1 },
)
reveals.forEach((el) => observer.observe(el))

// ── Work Filter ──
const filterBtns = document.querySelectorAll('.filter-btn')
const workCards = document.querySelectorAll('.work-card')

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'))
    btn.classList.add('active')
    const filter = btn.dataset.filter
    workCards.forEach((card) => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'grid'
      } else {
        card.style.display = 'none'
      }
    })
  })
})

// ── Contact Form ──
/*const form = document.getElementById('contactForm')
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const btn = form.querySelector('button[type="submit"]')
    btn.textContent = '✅ Message Sent!'
    btn.style.background = '#16a34a'
    setTimeout(() => {
      btn.textContent = 'Send Message'
      btn.style.background = ''
      form.reset()
    }, 3000)
  })
}*/
emailjs.init('I54jKlLI3VH1a4Uqv') // paste your public key here

const form = document.getElementById('contactForm')
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const btn = form.querySelector('button[type="submit"]')
    btn.textContent = 'Sending...'

    emailjs
      .sendForm('service_dafhkck', 'template_9bkac1k', form)
      .then(() => {
        btn.textContent = '✅ Message Sent!'
        btn.style.background = '#16a34a'
        setTimeout(() => {
          btn.textContent = 'Send Message →'
          btn.style.background = ''
          form.reset()
        }, 3000)
      })
      .catch(() => {
        btn.textContent = '❌ Failed. Try again.'
        btn.style.background = '#dc2626'
      })
  })
}

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id
  })
  document.querySelectorAll('.nav-links a').forEach((a) => {
    a.style.color = a.getAttribute('href') === `#${current}` ? '#3b82f6' : ''
  })
})
