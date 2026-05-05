const routes = {
    '/home': "<h1>Salut</h1>",
    '/products': "<h1>Produse</h1>",
    '/contact': "<h1>Contact</h1>"
}
function router() {
    const route = window.location.hash.replace(/^#/, "")|| "/home";
    console.log(route);
    const content = routes[route] || "<h1>404 Continutul nu a fost gasit</h1>";
    document.getElementById("app").innerHTML = content;
}
window.addEventListener('hashchange', router);
window.addEventListener("DOMContentLoaded", router);