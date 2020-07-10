
const bodyElement = document.querySelector('body')
const mainElement = document.createElement('main')
const imgElement = document.createElement('img')
const buttonElement = document.createElement('button')
const anchorElement = document.createElement('a')


bodyElement.append(buttonElement)
buttonElement.append('Sunflowers and Roses')

imgElement.className = 'image'
imgElement.src = 'https://static.wixstatic.com/media/f2123b_f03f26920e554034b1d1ffe51ce5c0da~mv2.png/v1/fill/w_930,h_930,al_c,q_90/f2123b_f03f26920e554034b1d1ffe51ce5c0da~mv2.webp'
mainElement.append(imgElement)

anchorElement.href = 'https://static.wixstatic.com/media/f2123b_f03f26920e554034b1d1ffe51ce5c0da~mv2.png/v1/fill/w_575,h_575,al_c,q_90,usm_0.66_1.00_0.01/f2123b_f03f26920e554034b1d1ffe51ce5c0da~mv2.webp'
mainElement.append(anchorElement)
anchorElement.append('FLOWERS by special arrangements')
bodyElement.append(mainElement)

buttonElement.addEventListener('click', function() {
mainElement.remove ()
})


