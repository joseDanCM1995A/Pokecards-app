import "bootstrap/dist/css/bootstrap.min.css"; // importando bootstrap
import './styles.scss'; // importando sass
import { router } from './router/index.routes'

router(window.location.hash); // para que se muestre el contenido al acceder a la página
window.addEventListener('hashchange', () => {
    router(window.location.hash); // obtener el hash de cada pagina (home, products y posts)
});