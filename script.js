// On récupère toutes les touches dans une variable, pour la transformer en tableau on utilise le spread operator [...]
const touches = [...document.querySelectorAll('.button')];
// On récupère les keyscode de toutes les touches avec map
const listeKeycode = touches.map(touche => touche.dataset.key);




