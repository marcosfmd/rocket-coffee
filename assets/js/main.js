const showMwenu = document.querySelector(".open")
const showMwenuClose = document.querySelector(".close")
const headerList = document.querySelector(".header-list")
const listItem = document.querySelectorAll(".list-item")
const listItemLink = document.querySelectorAll(".list-item-link")

showMwenu.addEventListener("click", () => {
  headerList.classList.toggle('header-list-show-menu')
  showMwenu.style.display = 'none'
  showMwenuClose.style.display = 'block'

  for(i = 0; i <listItem.length; i++) {
    listItem[i].classList.toggle('list-item-mobile')
  }
  for(i = 0; i <listItemLink.length; i++) {
    listItemLink[i].classList.toggle('link-mobile')
  }
})

showMwenuClose.addEventListener("click", () => {
  headerList.classList.toggle('header-list-show-menu')
  showMwenu.style.display = 'block'
  showMwenuClose.style.display = 'none'
  for(i = 0; i <listItem.length; i++) {
    listItem[i].classList.toggle('list-item-mobile')
  }
  for(i = 0; i <listItemLink.length; i++) {
    listItemLink[i].classList.toggle('link-mobile')
  }
})




