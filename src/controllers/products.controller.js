import views from '../views/products.html';
export default () => {
    // la vista espera un elemento html
    const divElement = document.createElement('div');
    divElement.innerHTML = views;


    return divElement;

}