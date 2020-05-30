import { pages } from '../controllers/index'; //importando la vista home

let content = document.getElementById('root');

const router = async(route) => { //pra que cache la ruta actual
    content.innerHTML = ''; //reseteando cada vez que se ejecute la ruta
    // console.log(route) // imprimiendo la ruta
    switch (route) {
        case '#/':
            // return console.log("You're in home");
            return content.appendChild(pages.home());
        case '#/products':
            return content.appendChild(pages.products());
        case '#/posts':
            return content.appendChild(await pages.posts());
        default:
            return content.appendChild(pages.error404());
    }
};

export { router }; //pra que pueda ser accedida