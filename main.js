const backToTop = document.getElementById('backtotop');

const toggles = document.querySelectorAll('.toggle');
const toggleBtn = document.querySelector('#toggle-btn');



const checkScroll = () => {
  let yOffset = window.pageYOffset;

  if(yOffset !== 0) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

const moveBackToTop = () => {
  if(window.pageYOffset > 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

const appearMenu = (toggle) => {
  for (const toggle of toggles) {
    toggle.classList.toggle('on');
  }
}

const hideMenu = () => {
  if(window.innerWidth > 768) {
    for(const toggle of toggles) {
      toggle.classList.remove('on');
    }
  }
}

window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);

toggleBtn.addEventListener('click', appearMenu);
window.addEventListener('resize', hideMenu)


