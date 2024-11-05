// static/js/spa-navigation.js

// Importa los módulos de cada sección
import { renderHome, initHome } from './views/home.js';
// import { renderAbout, initAbout } from './views/about.js';
import { renderLogin, initLogin } from './views/login.js';
// import { renderJuego, initJuego } from './views/juego.js';
// import { renderTorneo, initTorneo } from './views/torneo.js';

// Configura las rutas de la aplicación y su lógica asociada
const routes = {
    "/index": { render: renderHome, init: initHome },
    // "/about": { render: renderAbout, init: initAbout },
    "/login": { render: renderLogin, init: initLogin },
    // "/juego": { render: renderJuego, init: initJuego },
    // "/torneo": { render: renderTorneo, init: initTorneo },
};

function router() {
    const path = location.hash.slice(1) || "/index";
    const route = routes[path];

    if (route) {
        // Carga el contenido en #main-content
        document.getElementById("main-content").innerHTML = route.render();
        
        // Ejecuta la lógica de inicialización de la sección
        route.init();
    } else {
        document.getElementById("main-content").innerHTML = "<h2>404</h2><p>Página no encontrada</p>";
    }
}

// Escucha cambios en el hash y carga el contenido adecuado
window.addEventListener("hashchange", router);
window.addEventListener("load", router);
