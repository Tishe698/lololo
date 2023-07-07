const toglerBtn = document.querySelector('.togler_btn');
const toglerBtnIcon = document.querySelector('.togler_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');


toglerBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toglerBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

};

