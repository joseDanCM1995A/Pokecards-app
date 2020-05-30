import Home from './home.controller';
import Products from './products.controller';
import Posts from './posts.controller';
import Error404 from './404.controller';

const pages = {
    home: Home,
    products: Products,
    posts: Posts,
    error404: Error404
};

export { pages };