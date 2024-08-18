import './style.css';
import './staffy.jpeg';

export function createHomePage() {

    const content = document.querySelector('#content');

    content.replaceChildren();

    const homePage = document.createElement('div');
    homePage.classList.add('content');
    
    const image = document.createElement('img')
    image.src = './staffy.jpeg';
    image.height = '200';
    homePage.appendChild(image);

    const header1 = document.createElement('h1');
    header1.textContent = "Bingo's Restaurant";
    homePage.appendChild(header1);

    const paraG = document.createElement('p');
    paraG.textContent = "This restaurant has the best Staffy staff that you ever seen No dog hair in your food and itll never have a bite in it!";
    header1.appendChild(paraG);

    content.appendChild(homePage);

}

