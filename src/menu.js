import './style.css';

//menu.js
export function createMenu() {
    const content = document.querySelector('#content');

    content.replaceChildren();


    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    content.appendChild(menuContent);

    const header1 = document.createElement('h1');
    header1.textContent = 'The Menu';
    menuContent.appendChild(header1)

    const unOrderedList = document.createElement('ul');
    header1.appendChild(unOrderedList); 

    const menuItem1 = document.createElement('li');
    menuItem1.textContent = "Shihtzu Vanilla Swirl";
    unOrderedList.appendChild(menuItem1);

    const menuItem2 = document.createElement('li');
    menuItem2.textContent = "Doggy Chao";
    unOrderedList.appendChild(menuItem2);

    const menuItem3 = document.createElement('li');
    menuItem3.textContent = "Pierres Treats";
    unOrderedList.appendChild(menuItem3);
};





