import {createHomePage as Home} from './homePage.js';
import {createMenu as Menu} from './menu.js';

const tabSwitch = () => {
    
    const menuBtn = document.querySelector('#menu');
    const aboutBtn = document.querySelector('#about')
    const contactBtn = document.querySelector('#contact')
    const homeBtn = document.querySelector('#home');
    const content = document.querySelector('#content')


    homeBtn.addEventListener('click', () => {
        Home();
    });
    

    
    menuBtn.addEventListener('click', () => {
        Menu();
    });
    
};
tabSwitch();












