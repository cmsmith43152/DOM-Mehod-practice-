const bodyElement = document.querySelector('body')
const mainElement = document.createElement('main')
const buttonElement = document.createElement('button')
const imgElement = document.createElement('img')
const anchorElement = document.createElement('a')


bodyElement.append(buttonElement)
buttonElement.append('Beauty and the Beast')

bodyElement.append(mainElement)

imgElement.className = 'image'
imgElement.src = 'https://www.bitchmedia.org/sites/default/files/styles/article_page_featured_image/public/beauty-beast_032117_01.png?itok=5kpD8q-b'
mainElement.append(imgElement)

anchorElement.className = 'link'
anchorElement.href = 'https://www.bitchmedia.org/sites/default/files/styles/article_page_featured_image/public/beauty-beast_032117_01.png?itok=5kpD8q-b'
mainElement.append(anchorElement)
anchorElement.append ('bitchMedia')

buttonElement.addEventListener('click', function(){
    mainElement.remove ()
})