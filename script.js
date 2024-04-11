let sidenav = document.querySelector('.sidenav')
let biList = document.querySelector('.bi-list')
let sidenavBgDark = document.querySelector('.sidenav-bg-dark')
let body = document.querySelector('body')

biList.addEventListener('click', () =>{
    sidenav.style.left = '0'
    sidenavBgDark.style.display = 'block'
    body.style.maxHeight = '100vh'
    body.style.overflowY = 'hidden'
})

sidenavBgDark.addEventListener('click', () =>{
    sidenav.style.left = '-100%'
    sidenavBgDark.style.display = 'none'
    body.style.height = '100vh'
    body.style.overflowY = 'scroll'
})
