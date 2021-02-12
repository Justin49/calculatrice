// On récupère toutes les touches dans une variable, pour la transformer en tableau on utilise le spread operator [...]
const touches = [...document.querySelectorAll('.button')];
// On récupère les keyscode de toutes les touches avec map
const listeKeycode = touches.map(touche => touche.dataset.key);

// On créer un écouteur d'évènement sur les touches du clavier, on lui associe un évènement qui nous permettera d'utiliser les keycode
document.addEventListener('keydown', (e) => {

    // On récupère la valeur pour accéder au keycode, on converti la valeur en chaîne de caractère car au départ dans notre tableau de keycode on à des chaîne de caractère
    const valeur = e.keyCode.toString();
    
});

// On créer un écouteur d'évènement au clique des touches sur la calculatrice
document.addEventListener('click', (e) => {

    const valeur = e.target.dataset.key;
    
});



