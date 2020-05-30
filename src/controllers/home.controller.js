import views from '../views/home.html';
export default () => {
    // la vista espera un elemento html
    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    // darle el evento al botón
    // En este caso con document no funciona porqe aun no se crea en el momento cuando se solicita
    // por ello nos enfocamos en el elemento que creamos (el div)  con query selector 
    // const btnClick = divElement.querySelector('#btnClick');
    // btnClick.addEventListener('click', () => {
    //     alert('Bienvenido a esta SPA desarrollaga con webpack-js-html-css(bootstrap4)');
    // });

    return divElement;

}