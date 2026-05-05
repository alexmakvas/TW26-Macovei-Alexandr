const routes = {
    '/home': "<h1>Salut</h1>",
    '/products': "<h1>Produse</h1>",
    '/contact': "<h1>Contact</h1>"
}
function router(path) {
    const content = routes[path] || "<h1>404 Continutul nu a fost gasit</h1>";
    document.getElementById("app").innerHTML = content;
}
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        const path = link.getAttribute("href");
        history.pushState({}, "", path);
        router(path);
        event.preventDefault();
    });
});

window.addEventListener("popstate", () => {
    router(location.pathname);
});

history.replaceState({}, "", "/home");
router("/home");

document.getElementById("span").addEventListener("click", (event) => {
    console.log("Span clicked");
    event.stopPropagation();
});
document.getElementById("div").addEventListener("click", () => {
    console.log("Div clicked");
});