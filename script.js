let landimg = document.querySelector('.landimg img')
let img = document.querySelectorAll('.imgopt img')
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
    console.log(e.target.classList)


  })


})