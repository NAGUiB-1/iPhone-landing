let landimg = document.querySelector('.landimg img')
let img = document.querySelectorAll('.imgopt img')

var m = document.createElement('meta');
m.name = 'theme-color';
m.content = '#4a4a4a';
document.head.appendChild(m);

img.forEach(e => {
  e.addEventListener('click', e => {
    let src = e.target.src
    landimg.src = src
    document.documentElement.style.setProperty('--main', e.target.dataset.color)
    document.documentElement.style.setProperty('--text', e.target.dataset.txt)
    img.forEach(e => {
      e.classList.remove('active')
    })
    e.target.classList.add('active')
    m.content = e.target.dataset.color;


  })


})
