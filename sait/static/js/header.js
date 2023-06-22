const toglerBtn = document.querySelector('.togler_btn')
const toglerBtnIcon = document.querySelector('.togler_btn i')
const dropDown_menu = document.querySelector('.dropdown_menu')

toglerBtn.onclick = function () {
    dropDown_menu.classList.toggle('open')
    const isOpen = dropDown_menu.classList.contains('open')

    toglerBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}