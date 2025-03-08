document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio website loaded!')
  const navItems = document.querySelectorAll('.navigation li')
  const skillsBtn = document.getElementById('skillsExpandBtn')
  const skillsDetails = document.getElementById('skillsDetails')
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'))
      item.classList.add('active')
    })
  })
  
  if (skillsBtn && skillsDetails) {
    skillsBtn.addEventListener('click', () => {
      skillsBtn.classList.toggle('active')
      skillsDetails.classList.toggle('active')
    })
  } else {
    console.log('Elements not found:', { skillsBtn, skillsDetails })
  }
})